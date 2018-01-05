import React, {Component} from "react";
import {View, Text} from "react-native";
import EmployeeInputs from "./employeeInputs";
import {connect} from "react-redux";
import Card from "./common/card";
import Button from "./common/button";
import CardSection from "./common/cardSection";
import {employeeUpdate, emlpoyeeSave, employeeDelete} from "../actions";
import _ from "lodash";
import Communications from "react-native-communications";
import Confirm from "./common/confirm";

class EmployeeEdit extends Component{

  state= {visible: false};

  componentWillMount(){
    _.each(this.props.employee, (val, prop)=> {
      this.props.employeeUpdate({prop, val});
      const {name, phone, shift} = this.props.employee;
      console.log(name, phone, shift);
    })
  }

  onButtonPress(){
    const {name, phone, shift}= this.props;
    this.props.emlpoyeeSave({name, phone, shift, uid:this.props.employee.uid});
  }

  onTextMessage(){
    const { phone, shift } = this.props;
    Communications.text(phone, `You have a new shift for ${shift}`)
  }

  showModal(){
    this.setState({visible: true})
  }

  onAccept(){
    const {uid}= this.props.employee
    this.props.employeeDelete({uid})
  }

  onDecline(){
    this.setState({visible: false})
  }

  render(){
    return(
      <Card>
          <EmployeeInputs/>

        <CardSection>
          <Button event ={this.onButtonPress.bind(this)}>
              Edit User
          </Button>
        </CardSection>

        <CardSection>
          <Button event ={this.onTextMessage.bind(this)}>
            Text Employee
          </Button>
        </CardSection>

         <CardSection>
          <Button event ={this.showModal.bind(this)}>
            Fire Employee
          </Button>
        </CardSection>


        <Confirm visible= {this.state.visible}
          onAccept= {this.onAccept.bind(this)}
          onDecline = {this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
}


export default connect(mapStateToProps, {employeeUpdate, emlpoyeeSave, employeeDelete})(EmployeeEdit);

import React, {Component} from "react";
import {View, Text} from "react-native";
import Card from "../components/common/card";
import Button from "../components/common/button";
import CardSection from "../components/common/cardSection";
import Input from "../components/common/input";
import {connect} from "react-redux";
import {employeeUpdate, createEmployee} from "../actions";
import EmployeeInputs from "./employeeInputs";

class EmployeeForm extends Component {

  onButtonPress(){
    const {name, phone, shift} = this.props;
    this.props.createEmployee({name, phone, shift: shift || "Monday"});
  }

  render() {
    return(
      <Card>
        <EmployeeInputs {...this.props}/>
        <CardSection>
          <Button event= {this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state)=> {
  const {name, phone, shift} = state.employeeForm

  return {name, phone, shift}
}


export default connect(mapStateToProps, {employeeUpdate, createEmployee})(EmployeeForm);

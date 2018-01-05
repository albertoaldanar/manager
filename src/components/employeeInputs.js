import React, {Component} from "react";
import {View, Picker, Text} from "react-native";
import CardSection from "../components/common/cardSection";
import Input from "../components/common/input";
import {connect} from "react-redux";
import {employeeUpdate} from "../actions";

class EmployeeInputs extends Component{
  render(){
    return(
      <View>
        <CardSection>
          <Input
            label ="Name"
            placeholder ="Jane"
            value ={this.props.name}
            onChangeText = {value => this.props.employeeUpdate({prop: "name", value: value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label ="Number"
            placeholder ="555-555-555"
            value = {this.props.phone}
            onChangeText = {value => this.props.employeeUpdate({ prop: "phone", value: value })}
          />
        </CardSection>

        <CardSection>
          <Text style ={{paddingLeft: 20, fontSize: 18}}>Shift</Text>
          <Picker
            selectedValue = {this.props.shift}
            onValueChange = {value => this.props.employeeUpdate({ prop: "shift", value })}
            style = {{flex: 1}}
          >
            <Picker.Item label ="Monday" value ="Monday"/>
            <Picker.Item label ="Tuesday" value ="Tuesday"/>
            <Picker.Item label ="Wednesday" value ="Wednesday"/>
            <Picker.Item label ="Thursday" value ="Thursday"/>
            <Picker.Item label ="Friday" value ="Friday"/>
            <Picker.Item label ="Saturday" value ="Saturday"/>
            <Picker.Item label ="Sunday" value ="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};

}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeInputs);

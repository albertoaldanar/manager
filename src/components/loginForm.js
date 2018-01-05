import React, {Component} from "react";
import {View, Text} from "react-native";
import Card from "../components/common/card";
import Button from "../components/common/button";
import CardSection from "../components/common/cardSection";
import Input from "../components/common/input";
import Spinner from "../components/common/spinner";
import {connect} from "react-redux";
import {emailChanged} from "../actions";
import {passwordChanged} from "../actions";
import {loginUser} from "../actions";


class LoginForm extends Component{

  onEmailChange(text){
      this.props.emailChanged(text)
    }

  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const {email, password} = this.props
    this.props.loginUser({email, password});
  }

  showError(){
    if(this.props.error){
      return(
        <View>
          <Text style ={{color: "red"}}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton(){
    if(this.props.loading){
      return <Spinner size ="large"/>
    }
    return(
      <Button event= {this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render(){

    return(
      <Card>
        <CardSection>
          <Input
            label ="email"
            placeholder= "example@gmail.com"
            onChangeText = {this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>

        <CardSection>
           <Input
            secureTextEntry
            label ="password"
            placeholder= "password"
            onChangeText = {this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>
        {this.showError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

 const mapStateToProps = state => {
    return {
      email: state.auth.email,
      password: state.auth.password,
      error: state.auth.error,
      loading: state.auth.loading
    }
 }

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

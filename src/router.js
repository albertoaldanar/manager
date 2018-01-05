import React from "react";
import {Scene, Router, Stack, Actions} from "react-native-router-flux";
import LoginForm from "./components/loginForm";
import EmployeeList from "./components/employeeList";
import EmployeeForm from "./components/employeeForm";
import EmployeeEdit from "./components/employeeEdit";


const RouterComponent = () => {
  return (
   <Router>
      <Stack key="root" hideNavBar>
        <Scene key= "auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key= "main">
          <Scene
            onRight = {()=> Actions.employeeForm()}
            rightTitle ="+"
            rightButtonTextStyle = {{color: "red", height: 20, width: 20}}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            intial
            />
          <Scene key ="employeeForm" component= {EmployeeForm} title ="Create employee" />
          <Scene key ="employeeEdit" component ={EmployeeEdit} title ="Edit employee"/>

        </Scene>
      </Stack>
  </Router>
  );
}

export default RouterComponent;


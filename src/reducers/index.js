import {combineReducers} from "redux";
import AuthReducer from "./authReducer"
import EmployeeForm from "./employeeFormReducer";
import Employees from "./employeesReducer";

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeForm,
  employees: Employees
});

import firebase from "firebase";
import {Actions}  from "react-native-router-flux";

export const employeeUpdate = ({prop, value}) => {
  return {
    type: "employee_update",
    payload: {prop, value}
  }
}

export const createEmployee = ({name, phone, shift})=> {

  const {currentUser} = firebase.auth();
    return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift})
    .then(() => {
      dispatch({type: "reset_info"});
      Actions.main({type: 'reset'});
    });
    }
}

export const fetchEmployees = ()=> {
  const {currentUser} = firebase.auth();

  return (dispatch)=> {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on("value", snapshot=> {
      dispatch({type: "employess_fetch_success", payload: snapshot.val()})
    })
  }
}

export const emlpoyeeSave = ({name, phone, shift, uid}) => {
  return (dispatch) => {

    const {currentUser} = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({name, phone, shift})
    .then(() => {
      dispatch({type: "reset_info"});
      Actions.main({type: "reset"});
    })
  }
}

export const employeeDelete = ({uid})=> {
  const {currentUser} = firebase.auth();
  return()=> {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
      .then(()=> {
        Actions.main({type: "reset"});
      })
  }
}

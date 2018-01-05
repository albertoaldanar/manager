import firebase from "firebase";
import {Actions} from "react-native-router-flux";


export const emailChanged = (text) => {
  return {
    type: "email_changed",
    payload: text
  }
}


export const passwordChanged = (text) => {
  return{
    type: "password_changed",
    payload: text
  }
}


export const loginUser = ({email, password}) => {
  return(dispatch) => {

    dispatch({type: "login_starts"})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user =>{
        dispatch({type: "user_logedin", payload: user})
        Actions.main();
      })

      .catch((error)=> {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch({type: "user_logedin", payload: user})
        })
          .catch(() => loginUserFail(dispatch))
          })

  }
};


const loginUserFail = (dispatch) => {
 dispatch({type: "user_logedin_fail"})
}

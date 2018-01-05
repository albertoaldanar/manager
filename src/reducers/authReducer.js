const INITIAL_STATE = {email: "", password: "", user: "", error: "", loading: false};

export default (state = INITIAL_STATE, action) => {

  console.log(action)

  switch(action.type){
    case "email_changed":
      return {...state, email: action.payload}
    case "password_changed":
      return {...state, password: action.payload}
    case "user_logedin":
      return {...state, ...INITIAL_STATE, user: action.payload}
    case "user_logedin_fail":
      return {...state, error: "Authentication failed", loading: false, password: ""}
    case "login_starts":
      return {...state, loading: true, error: ""}
    default:
      return state
  }
}

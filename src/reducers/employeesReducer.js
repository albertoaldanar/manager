const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action)=> {
  switch(action.type){
    case "employess_fetch_success":
      return action.payload;
    default:
      return state;
  }
}

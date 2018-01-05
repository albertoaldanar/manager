import React, {Component} from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/loginForm";
import ReduxThunk from "redux-thunk";
import Router from "./router";

class App extends Component {

  componentWillMount(){
    var config = {
      apiKey: 'AIzaSyAyw9FlNUCjwQ220LFiIXgQw7Xbal0I-cU',
      authDomain: 'manager-2fe0b.firebaseapp.com',
      databaseURL: 'https://manager-2fe0b.firebaseio.com',
      projectId: 'manager-2fe0b',
      storageBucket: 'manager-2fe0b.appspot.com',
      messagingSenderId: '508294509742'
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}

export default App;

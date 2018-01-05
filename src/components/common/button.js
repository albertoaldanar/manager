import React from "react";
import {  View, Text, TouchableOpacity } from "react-native";


const Button = (props) => {
  return(
    <TouchableOpacity onPress={props.event} style={style.buttonStyle}>
      <Text style ={style.textStyle}> {props.children}</Text>
    </TouchableOpacity>
  );
}

const style = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginRight: 5,
    marginLeft: 5
  }
}

export default Button;

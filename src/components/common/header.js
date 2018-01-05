import React from "react";
import {Text, View} from "react-native";

const Header = (props) => {
  return(
    <View style ={styles.viewStyle}>
      <Text style = {styles.textStyle}>{props.headerText}</Text>
    </View>
  )
};


const styles = {

    viewStyle: {
      backgroundColor : "#F8F8F8",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 15,
      height: 60,
      shadowColor: "#000",
      shadowOffset: { width: 5, height: 2 },
      shadowOpacity: 0.2,
      position: "relative",
      elevation: 2

    },

    textStyle: {
      fontSize: 20
    }
};

export default Header;

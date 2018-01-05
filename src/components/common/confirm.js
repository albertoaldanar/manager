import React from "react";
import CardSection from "./cardSection";
import Button from "./button";
import {View, Text, Modal} from "react-native";


const Confirm = ({ children, onAccept, onDecline, visible })=> {

  const {cardSectionStyle, textStyle, containerStyle} = styles;

  return(
    <Modal
      transparent
      onRequestClose={()=> {}}
      visible = {visible}
      animationType = "slide"
    >
      <View style= {containerStyle}>
        <CardSection style ={cardSectionStyle}>
          <Text style ={textStyle}>{children}</Text>
        </CardSection>

        <CardSection style = {cardSectionStyle}>
          <Button event = {onAccept}>Yes</Button>
          <Button event = {onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

const styles = {

  cardSectionStyle:{
    justifyContent: "center"
  },

  textStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 40
  },

  containerStyle:{
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }


}


export default Confirm;

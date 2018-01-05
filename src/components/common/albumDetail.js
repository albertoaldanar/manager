import React from "react";
import {View, Text, Image, Linking} from "react-native";
import Card from "./card";
import CardSection from "./cardSection";
import Button from "./button";

const AlbumDetail = ({data}) => {
  return(
    <Card >
      <CardSection>

        <View style = {styles.imageSpace}>
          <Image style = {styles.imageStyle} source = {{uri: data.thumbnail_image}}/>
        </View>

        <View style ={styles.cardSectionStyle}>
          <Text style = {styles.headerTextStyle}>{data.title}</Text>
          <Text>{data.artist}</Text>
        </View>

      </CardSection>

      <CardSection>
        <Image style = {styles.albumImage} source = {{uri: data.image}}/>
      </CardSection>

      <CardSection>
        <Button event = {()=> Linking.openURL(data.url)}>
          <Text>Download</Text>
        </Button>
      </CardSection>

    </Card>
  );
}

const styles = {
  cardSectionStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  imageStyle:{
    height: 50,
    width: 50,
    borderRadius: 30
  },
  imageSpace: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTextStyle: {
    fontSize: 18
  },
  albumImage:{
    height: 300,
    flex: 1,
    width: null
  }
}



export default AlbumDetail;

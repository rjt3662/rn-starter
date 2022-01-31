import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

ImageDetail.defaultProps = {
  title: "New Title",
  imageSource: require("../../assets/beach.jpg"),
};

export default ImageDetail;

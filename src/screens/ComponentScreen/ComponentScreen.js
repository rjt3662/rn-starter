import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { styles } from "./ComponentScreen.style";

const ComponentScreen = () => {
  const name = "Rajat Mishra";
  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with react native</Text>
      <Text style={styles.subHeaderStyle}> My name is {name}</Text>
    </View>
  );
};

export default ComponentScreen;

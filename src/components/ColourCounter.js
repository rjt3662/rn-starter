import React from "react";
import { View, Button, Text } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease}></Button>
      <Button title={`Descrease ${color}`} onPress={onDecrease}></Button>
    </View>
  );
};

export default ColorCounter;

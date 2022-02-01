import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColourCounter";

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
  switch (action.type) {
    case "change_red":
      let newRed = state.red + action.payload;
      return newRed > 0 || newRed < 255 ? { ...state, red: newRed } : state;
    case "change_green":
      let newGreen = state.green + action.payload;
      return newGreen > 0 || newGreen < 255
        ? { ...state, green: newGreen }
        : state;
    case "change_blue":
      let newBlue = state.blue + action.payload;
      return newBlue > 0 || newBlue < 255 ? { ...state, blue: newBlue } : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <Text style={styles.text}>Enter your password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      {password.length < 4 ? (
        <Text style={styles.validationText}>
          Password must be of atleast 4 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 20,
  },
  validationText: {
    marginLeft: 15,
    fontSize: 16,
    color: "red",
  },
});

export default TextScreen;

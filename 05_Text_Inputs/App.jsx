import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Daniel");
  const [age, setAge] = useState("40");

  return (
    <View style={styles.container}>
      <Text>Enter name : </Text>
      <TextInput
        multiline
        keyboardType="twitter"
        style={styles.input}
        placeholder="enter your name"
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter age : </Text>
      <TextInput
        style={styles.input}
        placeholder="enter your age"
        onChangeText={(value) => setAge(value)}
      />

      <Text>
        name: {name}, age: {age}{" "}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0eebf",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

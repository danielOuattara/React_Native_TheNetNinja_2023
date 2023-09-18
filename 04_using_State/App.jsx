import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Daniel");
  const [person, setPerson] = useState({
    name: "Mario",
    age: 40,
  });

  const updateName = () => {
    setName("Julie");
    setPerson({ name: "John Doe", age: 47 });
    return;
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <Text>
        His name is {person.name} and his age is {person.age} y.o
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={updateName} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    marginTop: 20,
  },
});

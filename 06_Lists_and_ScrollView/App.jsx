import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "rabbit", id: "8" },
    { name: "wolf", id: "9" },
    { name: "pig", id: "10" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => (
          <View key={person.id}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0eebf",
    paddingTop: 40,
    paddingHorizontal: 25,
    // alignItems: "center",
    // justifyContent: "center",
  },
  person: {
    marginTop: 24,
    padding: 20,
    backgroundColor: "green",
    fontSize: 24,
    borderRadius: 6,
  },
});

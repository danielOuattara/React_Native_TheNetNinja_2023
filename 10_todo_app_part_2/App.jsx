import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "paly football", key: "3" },
  ]);

  const removeItem = (key) => {
    return setTodos((prevPeople) => {
      return prevPeople.filter((person) => person.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to do form */}

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeItem={removeItem} key={item.id} />
            )}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
});

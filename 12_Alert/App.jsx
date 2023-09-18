/* 

NOTE: This code outputs a list of todo that is not scrollable
for now because of FlatList component. Next, we shall see
how to handle this situation

https://reactnative.dev/docs/alert

*/

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";
import { AddTodoItem, Header, TodoItem } from "./components";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", completed: false, key: "1" },
    { text: "create an app", completed: false, completed: false, key: "2" },
    { text: "paly football", completed: false, key: "3" },
  ]);

  const removeTodo = (key) => {
    return setTodos((prevPeople) => {
      return prevPeople.filter((todo) => todo.key !== key);
    });
  };

  const addTodo = (title) => {
    console.log(title);
    return setTodos((prevState) => [
      ...prevState,
      { text: title, completed: false, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodoItem addTodo={addTodo} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeTodo={removeTodo} key={item.id} />
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

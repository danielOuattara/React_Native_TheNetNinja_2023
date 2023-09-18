/* 

NOTE: This code outputs a list of todo that IS scrollable
for now of help to "flex: 1" props


https://reactnative.dev/docs/keyboard
https://reactnative.dev/docs/touchablewithoutfeedback

*/

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
    return setTodos((prevState) => [
      ...prevState,
      { text: title, completed: false, key: Math.random().toString() },
    ]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("Phone Screen Touched !");
        Keyboard.dismiss();
      }}
    >
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
  },
  content: {
    padding: 40,
    flex: 1,
  },

  list: {
    marginTop: 10,
    flex: 1,
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
});

//--------------------------------------------------------------

// import { StyleSheet } from "react-native";
// import { SandBox } from "./components";

// export default function App() {
//   return <SandBox />;
// }

// const styles = StyleSheet.create({});

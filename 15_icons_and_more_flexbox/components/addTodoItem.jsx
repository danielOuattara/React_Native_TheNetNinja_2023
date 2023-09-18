/* 
https://reactnative.dev/docs/alert 

*/

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";

export default function AddTodoItem({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const sendNewTodo = () => {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle(() => "");
      return;
    } else {
      return Alert.alert(
        "Empty Title for Todo",
        "Please add a title for a todo",
        [{ text: "OK", onPress: () => console.log("Alert Closed") }],
      );
    }
  };

  return (
    <View>
      <TextInput
        style={styles.todoInput}
        placeholder="nex todo title"
        onChangeText={(value) => setTodoTitle(value)}
        value={todoTitle}
      />
      <TouchableOpacity onPress={() => sendNewTodo()}>
        <Text style={styles.btnAddItem}> ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAddItem: {
    padding: 10,
    color: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#747474",
  },

  todoInput: {
    borderBottomWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginBottom: 10,
    fontSize: 20,
  },
});

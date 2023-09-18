import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function AddTodoItem({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const sendNewTodoItem = () => {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle(() => "");
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
      <TouchableOpacity onPress={() => sendNewTodoItem()}>
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

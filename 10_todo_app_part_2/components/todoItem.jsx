import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function TodoItem({ item, removeItem }) {
  return (
    <TouchableOpacity onPress={() => removeItem(item.key)}>
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 16,
    marginTop: 16,
    color: "#bbb",
    // borderWidth: 1,
    // borderStyle: "dashed",
    backgroundColor: "coral",
    borderRadius: 4,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

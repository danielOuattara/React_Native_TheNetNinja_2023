import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, removeTodo }) {
  return (
    <TouchableOpacity onPress={() => removeTodo(item.key)}>
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 12,
    marginTop: 12,
    color: "#bbb",
    backgroundColor: "coral",
    borderRadius: 4,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

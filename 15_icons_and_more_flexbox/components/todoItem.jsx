/* 

https://docs.expo.dev/guides/icons/

*/

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, removeTodo }) {
  return (
    <View style={styles.item}>
      <Text style={styles.todoItem}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTodo(item.key)}>
        <MaterialIcons style={styles.icon} name="delete-forever" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginTop: 16,
    color: "#fff",
    backgroundColor: "coral",
    borderRadius: 8,
    fontSize: 18,
    textTransform: "capitalize",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    fontSize: 22,
    color: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  todoItem: {
    color: "#fff",
    fontSize: 18,
    textTransform: "capitalize",
    flex: 1,
  },
});

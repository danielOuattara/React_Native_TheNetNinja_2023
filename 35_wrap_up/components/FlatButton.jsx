import { StyleSheet, Text, View, Pressable } from "react-native";

export default function FlatButton({ text, onPress, hasError }) {
  return (
    <Pressable onPress={onPress} disabled={hasError}>
      <View
        style={hasError ? { ...styles.button, ...styles.error } : styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

  error: {
    backgroundColor: "#dbdbdb",
  },
});

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 28,
    color: "#333",
  },
  titleText2: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 28,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 8,
    fontSize: 18,
    borderRadius: 4,
    marginVertical: 10,
  },

  submit: {
    marginVertical: 10,
    color: "red",
  },
});

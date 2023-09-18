import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
    // flex: 1,
    // flexDirection: "column", // default
    flexDirection: "row",

    // justifyContent: "center",
    // justifyContent: "flex-end",
    // justifyContent: "space-between",
    // justifyContent: "space-evenly",
    justifyContent: "space-around",

    // alignItems: "center",
    // alignItems: "flex-start",
    // alignItems: "stretch",
    // alignItems: "baseline",
    alignItems: "flex-end",
    // flexWrap: 'wrap'
  },

  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 2,
    // height: 200,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 20,
    flex: 2,
    // height: 100,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 30,
    flex: 2,
    // height: 500,
  },
  boxFour: {
    backgroundColor: "lightgreen",
    padding: 40,
    flex: 2,
  },
});

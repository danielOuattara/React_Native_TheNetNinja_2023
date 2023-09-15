import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}> View Text Style !</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex
          beatae iusto, aliquam error harum exercitationem quidem saepe, magnam
          <Text>
            Does this portion of text inherit from parent ??? YES !!!!
          </Text>
        </Text>
        <Text>
          libero similique eligendi consequuntur in voluptatem minus? Voluptatem
          in odit fuga perferendis quae ipsam veritatis dolore adipisci ex.
        </Text>
        <Text>
          Commodi, doloribus neque! Odio iste, nemo saepe inventore cum optio
          accusamus magnam cumque?
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "orange",
    padding: 20,
  },

  boldText: {
    fontWeight: "bold",
    // fontSize: 26,
  },

  body: {
    backgroundColor: "yellow",
    padding: 20,
    margin: 20,
    fontWeight: "bold",
  },
});

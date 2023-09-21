import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Contact(props) {
  console.log(props);
  return (
    <View style={globalStyles.container}>
      <Text>contact me</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

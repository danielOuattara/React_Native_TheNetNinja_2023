import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Text style={globalStyles.titleText2}>Home screen</Text>
    </View>
  );
}

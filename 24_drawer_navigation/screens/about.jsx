import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function About(props) {
  console.log(props);
  return (
    <View style={globalStyles.container}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        maxime explicabo dicta adipisci iusto culpa quaerat qui nemo obcaecati.
        Ullam ipsa saepe culpa pariatur est repellat dolorum ad quis cupiditate.
      </Text>
    </View>
  );
}

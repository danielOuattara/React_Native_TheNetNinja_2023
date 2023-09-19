import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home(props) {
  const navigateHandler = () => {
    return props.navigation.navigate("ReviewDetails");
    // OR
    // return props.navigation.push("ReviewDetails");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title="got to reviews" onPress={navigateHandler}></Button>
    </View>
  );
}

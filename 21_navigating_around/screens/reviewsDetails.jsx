import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails(props) {
  const navigateHandler = () => {
    return props.navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>review details screen</Text>
      <Button title="back to home" onPress={navigateHandler}></Button>
    </View>
  );
}

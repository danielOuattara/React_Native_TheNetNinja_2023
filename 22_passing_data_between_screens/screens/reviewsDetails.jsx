import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails(props) {
  // console.log(props);
  return (
    <View style={globalStyles.container}>
      <Text>Title: {props.route.params.title}</Text>
      <Text>Rating: {props.route.params.rating}</Text>
      <Text>Content: {props.route.params.body}</Text>
    </View>
  );
}

import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Card } from "../components";

export default function ReviewDetails(props) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title: {props.route.params.title}</Text>
        <Text>Rating: {props.route.params.rating}</Text>
        <Text>Content: {props.route.params.body}</Text>
      </Card>
    </View>
  );
}

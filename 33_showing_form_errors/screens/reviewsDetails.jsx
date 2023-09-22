import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { Card } from "../components";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReviewDetails(props) {
  const numberOfLikes = props.route.params.rating;
  const starsArray = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return numberOfLikes >= index + 1 ? (
      <MaterialIcons name="star" color="orange" size={18} key={index} />
    ) : numberOfLikes >= number ? (
      <MaterialIcons name="star-half" color="orange" size={18} key={index} />
    ) : (
      <MaterialIcons name="star-outline" color="orange" size={18} key={index} />
    );
  });

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title: {props.route.params.title}</Text>
        <Text>Content: {props.route.params.body}</Text>
        <View style={styles.rating}>
          <Text> Rating: </Text>
          {starsArray}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";

export default function Home(props) {
  console.log(props);
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 5, body: "lorem ipsum Zelda", key: "1" },
    { title: "Gotta", rating: 4, body: "lorem ipsum Gotta", key: "2" },
    { title: "Fantasy", rating: 3, body: "lorem ipsum Fantasy", key: "3" },
  ]);
  // const serializedReviews = JSON.stringify(reviews);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

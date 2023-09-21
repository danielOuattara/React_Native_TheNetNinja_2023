import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import { Card } from "../components";

export default function Home(props) {
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 5, body: "lorem ipsum Zelda", key: "1" },
    { title: "Gotta", rating: 4, body: "lorem ipsum Gotta", key: "2" },
    { title: "Fantasy", rating: 3, body: "lorem ipsum Fantasy", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

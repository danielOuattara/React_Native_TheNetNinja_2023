import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import { Card } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home(props) {
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 4.5, body: "lorem ipsum Zelda", key: "1" },
    { title: "Gotta", rating: 3, body: "lorem ipsum Gotta", key: "2" },
    { title: "Fantasy", rating: 2.5, body: "lorem ipsum Fantasy", key: "3" },
  ]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevState) => [review, ...prevState]);
    setModalIsVisible(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={20}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalIsVisible(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add-circle-outline"
        size={20}
        style={styles.modalToggle}
        onPress={() => setModalIsVisible(true)}
      />
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

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 12,
    paddingLeft: 16,
    paddingTop: 16,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "#5a5a5a",
  },

  modalClose: {
    marginTop: 20,
  },
});

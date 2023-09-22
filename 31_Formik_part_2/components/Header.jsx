import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import { Dimensions } from "react-native";

export default function Header(props) {
  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <ImageBackground
      style={styles.header}
      source={require("./../assets/game_bg.png")}
    >
      <MaterialIcons
        name="menu"
        size={24}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("./../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // width: Dimensions.get("screen").width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "#333",
  },
  icon: {
    position: "absolute",
    left: -5,
    top: -5,
  },

  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});

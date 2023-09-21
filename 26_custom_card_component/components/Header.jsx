import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Dimensions } from "react-native";

export default function Header(props) {
  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={24}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
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
});

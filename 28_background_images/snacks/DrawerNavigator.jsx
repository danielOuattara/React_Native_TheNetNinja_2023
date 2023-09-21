import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

/* 

{
  "dependencies": {
    "@expo/vector-icons": "^13.0.0",
    "@react-native-community/masked-view": "*",
    "react-native-gesture-handler": "~2.9.0",
    "react-native-pager-view": "6.1.2",
    "react-native-paper": "^4.7.2",
    "react-native-reanimated": "~2.14.4",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "react-native-tab-view": "^3.0.0",
    "@react-navigation/bottom-tabs": "6.3.1",
    "@react-navigation/drawer": "6.4.1",
    "@react-navigation/elements": "1.3.3",
    "@react-navigation/material-bottom-tabs": "6.2.1",
    "@react-navigation/material-top-tabs": "6.2.1",
    "@react-navigation/native-stack": "6.6.1",
    "@react-navigation/native": "6.0.10",
    "@react-navigation/stack": "6.2.1"
  }
}

*/

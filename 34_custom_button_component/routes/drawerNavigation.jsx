import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import ContactStack from "./contactStack";
import HomeStackNavigation from "./homeStackNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  // console.log("props DrawerNavigation = ", props);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Drawer.Screen name="About Stack" component={AboutStack} />
        <Drawer.Screen name="Contact Stack" component={ContactStack} />
        <Drawer.Screen name="Home Stack" component={HomeStackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

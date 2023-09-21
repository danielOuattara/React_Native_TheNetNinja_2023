// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "./../screens";

const Stack = createNativeStackNavigator();

export default function AboutStack(props) {
  console.log("About props = ", props);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About Game Zone" }}
      />
    </Stack.Navigator>
  );
}

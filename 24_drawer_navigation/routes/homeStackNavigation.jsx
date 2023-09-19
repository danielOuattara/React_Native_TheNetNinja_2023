import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ReviewDetails } from "./../screens";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Game Zone" }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
        initialParams={{ countryOfOrigin: "China" }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

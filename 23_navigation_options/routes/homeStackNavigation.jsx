import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ReviewDetails } from "./../screens";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Game Zone",
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: { backgroundColor: "#3abb65" },
          }}
          initialParams={{ countryOfOrigin: "China" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

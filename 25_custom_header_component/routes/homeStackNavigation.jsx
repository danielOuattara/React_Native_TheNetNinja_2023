import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ReviewDetails } from "./../screens";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={(args) => {
          // console.log(args); // learning purpose only !
          return {
            headerTitle: () => (
              <Header navigation={args.navigation} name={args.route.name} />
            ),
          };
        }}

        // options={{ title: "Game Zone" }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
        initialParams={{ countryOfOrigin: "China" }}
      />
    </Stack.Navigator>
  );
}

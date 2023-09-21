import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "./../screens";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        // options={{ title: "About Game Zone" }}
        // options={{ headerTitle: () => <Header /> }}
        options={(args) => {
          // console.log(args); // learning purpose only !
          return {
            headerTitle: () => (
              <Header navigation={args.navigation} name={args.route.name} />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

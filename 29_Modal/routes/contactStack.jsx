import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Contact } from "./../screens";
import { Header } from "../components";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        // options={{ title: "Contact Game Zone" }}
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

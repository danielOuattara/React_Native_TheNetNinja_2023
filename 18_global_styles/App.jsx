/* 

https://docs.expo.dev/develop/user-interface/fonts/


*/

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./screens";
// import { useFonts } from "expo-font";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "nunito-bold": require("./assets/static-fonts/Nunito-Bold.ttf"),
    Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      {/* <Text style={{ fontFamily: "Nunito-Bold", padding: 30 }}>
        Hello Nunito
      </Text> */}
      {/* <Text style={{ fontFamily: "Montserrat_400Regular", padding: 60 }}>
        Hello Monserrat
      </Text> */}
      <Home />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

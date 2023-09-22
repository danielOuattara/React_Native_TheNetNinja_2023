/* 
https://reactnavigation.org/docs/drawer-navigator
*/

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { DrawerNavigation } from "./routes";
/* -------------Snack Bellow ------------- */

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
      <DrawerNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainTabNavigator from "./MainTabNavigator";

export default function RootNavigator() {
  const isLoggedIn = true; // পরে Redux / Token দিয়ে control করবো

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

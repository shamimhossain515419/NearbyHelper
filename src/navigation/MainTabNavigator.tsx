import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "হোম" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "প্রোফাইল" }} />
    </Tab.Navigator>
  );
}

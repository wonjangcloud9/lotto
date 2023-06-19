import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import HistoryListScreen from "../screens/HistoryListScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2f7c6e",
        tabBarInactiveTintColor: "#222222",
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
          borderTopWidth: 1,
          borderTopColor: "#f8f8f8",
        },
        tabBarIcon: (route) => {
          const getIconName = (routeName) => {
            switch (routeName) {
              case "Home":
                return "ios-home";
              case "History":
                return "ios-list";
              default:
                return "ios-help-circle";
            }
          };
          return (
            <Ionicons
              name={getIconName(route.name)}
              size={24}
              color={route.focused ? "#2f7c6e" : "#222222"}
            />
          );
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryListScreen} />
    </Tab.Navigator>
  );
};

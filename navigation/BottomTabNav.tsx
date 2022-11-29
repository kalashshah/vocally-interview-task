import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import Home from "../components/Home";
import { Theme } from "../types/theme";
import { useThemeStyle } from "../store/ThemeContext";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { themeMode, styles } = useThemeStyle(stylesheet);
  const iconColor = themeMode === "dark" ? "#fff" : "#000";
  const themeColor = themeMode === "dark" ? "#000" : "#fff";
  const iconSize = 25;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={iconColor}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="map" size={iconSize} color={iconColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: () => (
            <View style={styles.plusIconContainer}>
              <Feather name="plus" size={iconSize} color={"white"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={iconSize}
              color={iconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user-o" size={iconSize} color={iconColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    plusIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.primaryRed,
      justifyContent: "center",
      alignItems: "center",
      top: -20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      elevation: 21,
    },
    tabBarStyle: {
      backgroundColor: theme.backgroundColor,
    },
  });

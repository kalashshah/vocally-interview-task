import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Settings,
  Add,
  Profile,
  Notification,
} from "../components/TempComponents";
import Home from "../components/Home";
import { Theme } from "../types/theme";
import { useThemeStyle } from "../store/ThemeContext";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { styles } = useThemeStyle(stylesheet);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="compass-outline"
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <FontAwesome name="map" style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: () => (
            <View style={styles.plusIconContainer}>
              <Feather name="plus" style={[styles.icon, { color: "white" }]} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <FontAwesome name="user-o" style={styles.icon} />,
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
      borderTopWidth: 0,
    },
    icon: {
      color: theme.textColor,
      fontSize: 25,
    },
  });

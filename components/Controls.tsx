import React from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Theme, ThemeMode } from "../types/theme";
import { useThemeStyle } from "../store/ThemeContext";

const Controls = () => {
  const { toggleTheme, styles, themeMode } = useThemeStyle(stylesheet);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTheme}>
        <View style={styles.button}>
          <MaterialIcons
            name={themeMode === ThemeMode.light ? "toggle-on" : "toggle-off"}
            style={styles.toggleIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <FontAwesome5 name="location-arrow" style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Controls;

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 15,
      alignItems: "flex-end",
      width: "90%",
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 5,
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
    },
    button: {
      backgroundColor: theme.secondaryBackground,
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 6,
      
    },
    toggleIcon: {
      color: theme.textColor,
      fontSize: 35,
    },
    arrowIcon: {
      color: theme.textColor,
      fontSize: 20,
    },
  });

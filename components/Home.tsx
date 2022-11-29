import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusBar from "./StatusBar";
import { useThemeStyle } from "../store/ThemeContext";
import { Theme } from "../types/theme";
import Map from "./Map";

const ToggleButton = () => {
  const { themeMode, toggleTheme, styles } = useThemeStyle(stylesheet);
  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <Map />
    </View>
  );
};

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      justifyContent: "center",
    },
  });

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ToggleButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

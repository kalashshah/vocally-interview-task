import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

import { Theme } from "../types/theme";
import { silverMapStyle } from "../constants/silverMapStyle";
import { darkMapStyle } from "../constants/darkMapStyle";
import { useThemeStyle } from "../store/ThemeContext";

const Map = () => {
  const { themeMode, styles } = useThemeStyle(stylesheet);
  const mapStyle = themeMode === "light" ? silverMapStyle : darkMapStyle;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} customMapStyle={mapStyle} />
    </View>
  );
};

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });

export default Map;

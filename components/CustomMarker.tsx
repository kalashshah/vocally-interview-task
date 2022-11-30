import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MarkerData } from "../types/map";
import { Theme } from "../types/theme";
import { useThemeStyle } from "../store/ThemeContext";

interface Props {
  marker: MarkerData;
  isSelected: boolean;
}

const CustomMarker = ({ marker, isSelected }: Props) => {
  const { styles } = useThemeStyle(stylesheet);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isSelected
            ? styles.selected.backgroundColor
            : "transparent",
        },
      ]}
    >
      <Image
        style={{
          width: isSelected ? 45 : 40,
          height: isSelected ? 45 : 40,
          borderRadius: isSelected ? 22.5 : 20,
        }}
        source={{ uri: marker.image }}
      />
    </View>
  );
};

export default CustomMarker;

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: 50,
      height: 50,
      borderRadius: 27.5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.backgroundColor,
    },
    selected: {
      backgroundColor: theme.textColor,
    },
  });

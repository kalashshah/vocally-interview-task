import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Theme } from "../types/theme";
import { MarkerData } from "../types/map";
import { useThemeStyle } from "../store/ThemeContext";

interface Props {
  marker: MarkerData;
}

const SelectedLocation = ({ marker }: Props) => {
  const { styles } = useThemeStyle(stylesheet);

  return (
    <View style={styles.container}>
      <Image source={{ uri: marker.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{marker.name}</Text>
        <Text style={styles.description}>{marker.description}</Text>
      </View>
    </View>
  );
};

export default SelectedLocation;

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.secondaryBackground,
      padding: 10,
      borderRadius: 10,
      margin: 10,
      marginBottom: 40,
      width: "90%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "row",
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 10,
      marginRight: 10,
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      color: theme.textColor,
      fontSize: 15,
      fontWeight: "bold",
    },
    description: {
      color: theme.secondaryTextColor,
      fontSize: 12,
    },
  });

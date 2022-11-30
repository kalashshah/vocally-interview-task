import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Theme } from "../types/theme";
import { MarkerData } from "../types/map";
import { mapData } from "../constants/mapData";
import { useThemeStyle } from "../store/ThemeContext";

interface Props {
  query: string;
}

const SearchResults = ({ query }: Props) => {
  const { styles } = useThemeStyle(stylesheet);
  const [results, setResults] = useState<MarkerData[]>([]);

  const search = (query: string) => {
    query = query.toLowerCase();
    return mapData.filter((marker) =>
      marker.name.toLowerCase().includes(query)
    );
  };

  useEffect(() => {
    if (query.length > 0) {
      setResults(search(query));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <View style={styles.container}>
      {results.map((result, index) => (
        <View key={index} style={styles.result}>
          <Image source={{ uri: result.image }} style={styles.resultImage} />
          <Text style={styles.resultText}>{result.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default SearchResults;

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      alignSelf: "center",
      backgroundColor: theme.secondaryBackground,
      borderRadius: 10,
      zIndex: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 5,
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
    },
    result: {
      margin: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme.secondaryBackground,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    resultImage: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    resultText: {
      color: theme.secondaryTextColor,
    },
  });

import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Theme } from "../types/theme";
import SearchResults from "./SearchResults";
import { useThemeStyle } from "../store/ThemeContext";

const SearchBar = () => {
  const { styles } = useThemeStyle(stylesheet);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    setIsFocused(false);
    setQuery("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" style={styles.icon} />
        <TextInput
          placeholder="Search here"
          placeholderTextColor={styles.placeholder.color}
          style={styles.placeholder}
          value={query}
          onChangeText={(text) => setQuery(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && (
          <TouchableWithoutFeedback onPress={clearSearch}>
            <Ionicons name="close" style={styles.closeIcon} />
          </TouchableWithoutFeedback>
        )}
      </View>
      {isFocused && <SearchResults query={query} />}
    </View>
  );
};

export default SearchBar;

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "90%",
      alignSelf: "center",
    },
    searchBar: {
      height: 40,
      borderRadius: 10,
      marginTop: "10%",
      marginBottom: "2%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 5,
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.secondaryBackground,
    },
    icon: {
      color: theme.secondaryTextColor,
      fontSize: 20,
      marginHorizontal: 10,
    },
    closeIcon: {
      color: theme.secondaryTextColor,
      fontSize: 20,
      marginRight: 10,
    },
    placeholder: {
      color: theme.secondaryTextColor,
      fontSize: 18,
      flex: 1,
    },
  });

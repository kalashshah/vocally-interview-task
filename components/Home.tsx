import React from "react";
import { StyleSheet, View } from "react-native";

import Map from "./Map";
import Controls from "./Controls";
import StatusBar from "./StatusBar";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.absoluteView}>
        <SearchBar />
        <Controls />
      </View>
      <Map />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  absoluteView: {
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";

import Map from "./Map";
import Controls from "./Controls";
import StatusBar from "./StatusBar";
import SearchBar from "./SearchBar";
import { MarkerData } from "../types/map";
import SelectedLocation from "./SelectedLocation";

const Home = () => {
  const [selected, setSelected] = React.useState<null | MarkerData>(null);

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.absoluteTopView}>
        <SearchBar />
        <Controls />
      </View>
      <Map {...{ selected, setSelected }} />
      <View style={styles.absoluteBottomView}>
        {selected && <SelectedLocation marker={selected} />}
      </View>
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
  absoluteTopView: {
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
  },
  absoluteBottomView: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
  },
});

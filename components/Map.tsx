import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { Theme } from "../types/theme";
import CustomMarker from "./CustomMarker";
import { mapData } from "../constants/mapData";
import { useThemeStyle } from "../store/ThemeContext";
import { darkMapStyle } from "../constants/darkMapStyle";
import { silverMapStyle } from "../constants/silverMapStyle";

const Map = () => {
  const { themeMode, styles } = useThemeStyle(stylesheet);
  const mapStyle = themeMode === "light" ? silverMapStyle : darkMapStyle;
  const [selectedIndex, setSelectedIndex] = React.useState<null | Number>(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: 19.08153239644127,
          longitude: 72.88496575593064,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {mapData.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            onPress={() => setSelectedIndex(marker.id)}
            onDeselect={() => setSelectedIndex(null)}
          >
            <CustomMarker
              marker={marker}
              isSelected={marker.id === selectedIndex}
            />
          </Marker>
        ))}
      </MapView>
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

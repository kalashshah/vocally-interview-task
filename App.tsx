import { Button, StyleSheet, View } from "react-native";
import StatusBar from "./components/StatusBar";

import { ThemeProvider, useThemeStyle } from "./store/ThemeContext";
import { Theme } from "./types/theme";

const ToggleButton = () => {
  const { toggleTheme, styles } = useThemeStyle(stylesheet);
  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
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

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <StatusBar />
        <ToggleButton />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "./store/ThemeContext";
import Tabs from "./navigation/BottomTabNav";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}

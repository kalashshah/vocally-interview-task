import { StatusBar as StatusBarRN } from "expo-status-bar";
import { useTheme } from "../store/ThemeContext";

const StatusBar = () => {
  const { themeMode } = useTheme();
  return <StatusBarRN style={themeMode === "light" ? "dark" : "light"} />;
};

export default StatusBar;

import React, { createContext, useContext, useMemo, useState } from "react";
import { light, dark } from "../constants/theme";
import { StyleProp, useColorScheme } from "react-native";
import { Theme, ThemeMode } from "../types/theme";

interface ThemeContextInterface {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  themes: {
    [key in ThemeMode]: Theme;
  };
}

const ThemeContext = createContext<ThemeContextInterface>({
  themeMode: ThemeMode.light,
  themes: { light, dark },
  toggleTheme: () => {},
});

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeContextProps) => {
  const currentTheme: ThemeMode =
    useColorScheme() === ThemeMode.dark ? ThemeMode.dark : ThemeMode.light;

  const [themeMode, setThemeMode] = useState<ThemeMode>(currentTheme);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) =>
      prevThemeMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        themes: { light, dark },
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeStyle = <T extends StyleProp<any>>(
  stylesheetBuilder: (theme: Theme) => T
) => {
  const { themeMode, themes, toggleTheme } = useContext(ThemeContext);
  const theme = themes[themeMode];
  const styles = useMemo(() => stylesheetBuilder(theme), [themeMode]);
  return { themeMode, toggleTheme, styles };
};

export const useTheme = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  return { themeMode, toggleTheme };
};

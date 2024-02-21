import { createContext, useContext } from "react";

export const ThemeChange = createContext({
	themeMode: "light",
	lightTheme: () => {},
	darkTheme: () => {},
});

export const ThemeProvider = ThemeChange.Provider;

export default function useTheme() {
	return useContext(ThemeChange);
}

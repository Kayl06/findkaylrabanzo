import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Head from "next/head";
import {
  THEME_COLORS,
  THEME_DARK,
  THEME_LIGHT,
  applyTheme,
  getStoredTheme,
  persistTheme,
} from "@/lib/theme";

const ThemeContext = createContext({
  theme: THEME_DARK,
  isDark: true,
  isLight: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(THEME_DARK);

  useEffect(() => {
    const stored = getStoredTheme();
    applyTheme(stored);
    setThemeState(stored);
  }, []);

  const setTheme = useCallback((next) => {
    const applied = applyTheme(next);
    persistTheme(applied);
    setThemeState(applied);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEME_DARK,
      isLight: theme === THEME_LIGHT,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <Head>
        <meta name="theme-color" content={THEME_COLORS[theme]} />
      </Head>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

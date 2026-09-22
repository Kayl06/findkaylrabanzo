export const THEME_STORAGE_KEY = "theme";
export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";

export const THEME_COLORS = {
  dark: "#0b0d12",
  light: "#f4f6f8",
};

export function getStoredTheme() {
  if (typeof window === "undefined") return THEME_DARK;
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === THEME_LIGHT
      ? THEME_LIGHT
      : THEME_DARK;
  } catch {
    return THEME_DARK;
  }
}

export function applyTheme(theme) {
  const next = theme === THEME_LIGHT ? THEME_LIGHT : THEME_DARK;
  const root = document.documentElement;
  root.dataset.theme = next;
  root.style.colorScheme = next;
  return next;
}

export function persistTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore quota / private mode failures
  }
}

/** Inline blocking script for _document — keep in sync with getStoredTheme/applyTheme */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var n=t==='${THEME_LIGHT}'?'${THEME_LIGHT}':'${THEME_DARK}';var r=document.documentElement;r.setAttribute('data-theme',n);r.style.colorScheme=n;}catch(e){document.documentElement.setAttribute('data-theme','${THEME_DARK}');document.documentElement.style.colorScheme='${THEME_DARK}';}})();`;

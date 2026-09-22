import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={!isDark}
      title={label}
      className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg text-ink hover:bg-[var(--surface)] transition-colors ${className}`}
    >
      {isDark ? (
        <FiSun className="h-5 w-5" aria-hidden />
      ) : (
        <FiMoon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}

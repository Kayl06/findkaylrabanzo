import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

export default function V3Layout({ children }) {
  return (
    <div className={`v3-root ${inter.className} ${inter.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  );
}

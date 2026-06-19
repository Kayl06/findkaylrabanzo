import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/media.css";
import "@/styles/hamburger.css";
import "@/styles/v3.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={manrope.className}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Component {...pageProps} />
    </div>
  );
}

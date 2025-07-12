import { Dosis, Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-orbitron",
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-dosis",
});

export { dosis, orbitron };

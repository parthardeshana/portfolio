import { Outfit, Oswald } from "next/font/google";
import "./globals.css";
import Script from "next/script";

//relative path import
import Layout from "@/components/Layout/page";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-oswald",
});

export const metadata = {
  title: "TechniThunder - Crafting Brilliance",
  description: "web development company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${outfit.variable} ${oswald.variable}`}>
        <Layout childern={children} />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Helloworldpro",
  description: "Description goes here",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
      <GoogleTagManager gtmId='GTM-5796J69' />
    </html>
  );
}

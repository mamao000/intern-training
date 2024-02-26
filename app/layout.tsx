import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Providers from "./components/Providers";
import GoogleSigninButton from "./components/GoogleSigninButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{margin : "0px"}}>
        <div className="navbar">
          <div className="navbar_block">
            <img src="bars.svg"></img>
          </div>
          <img src="Group-22.svg" className="brand" ></img>
          <div className="navbar_block"></div>
          <div className="navbar_list">
            <button className="navbar_button" style={{ width: "141px", height: "64px"}}>繁體中文(台灣)</button>
            <button className="navbar_button" style={{ width: "88px", height: "64px"}}>常見問題</button>
            <button className="navbar_button" style={{ width: "88px", height: "64px"}}>聯繫我們</button>
          </div>
        </div>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
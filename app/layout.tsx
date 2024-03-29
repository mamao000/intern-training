import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Navbar,
  NavbarButton,
  NavbarBlock,
  NavbarBox,
  NavbarList,
  Brand,
} from "./styled";
import GlobalStyle from "./globalStyles";

const inter = Inter({ subsets: ["latin"] });
import Providers from "./components/Providers";
import StyledComponentsRegistry from "./lib/registry";

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
      <GlobalStyle />
      <body style={{ margin: "0px" }}>
        <StyledComponentsRegistry>
          <Navbar>
            <NavbarBlock>
              <img src="bars.svg"></img>
            </NavbarBlock>
            <Brand>
              <img src="Group-22.svg"></img>
            </Brand>
            <NavbarBlock></NavbarBlock>
            <NavbarList>
              <NavbarButton style={{ width: "141px", height: "64px" }}>
                繁體中文(台灣)
              </NavbarButton>
              <NavbarButton style={{ width: "88px", height: "64px" }}>
                常見問題
              </NavbarButton>
              <NavbarButton style={{ width: "88px", height: "64px" }}>
                聯繫我們
              </NavbarButton>
            </NavbarList>
          </Navbar>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

const UbuntuMedium = localFont({
  src: "./fonts/Ubuntu-Medium.woff",
  variable: "--font-ubuntu-medium",
  weight: "300 400 500 700",
});
const UbuntuRegular = localFont({
  src: "./fonts/Ubuntu-Regular.woff",
  variable: "--font-ubuntu-regular",
  weight: "300 400 500 700",
});

export const metadata = {
  title: "Mahadi Blog",
  description: "Best blog for next.js example. this blog website is super responsive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${UbuntuMedium.variable} ${UbuntuRegular.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

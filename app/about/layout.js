// import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


export const metadata = {
  title: "About - Mahadi Blog",
  description: "Best blog for next.js example. this blog website is super responsive.",
};

export default function aboutLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

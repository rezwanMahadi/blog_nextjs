import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Mahadi Blog",
  description: "Best blog for next.js example. this blog website is super responsive.",
};

export default function blogLayout({ children }) {
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

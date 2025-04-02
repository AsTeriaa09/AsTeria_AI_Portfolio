import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import Navigation from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Sultana Rupa | Creative Developer",
  description: "Digital craftsman specializing in creating unique web experiences with modern technologies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${outfit.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="noise" />
          <CustomCursor />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

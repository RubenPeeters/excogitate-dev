import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/custom/navbar";
import { ThemeProvider } from "./theme-provider";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex justify-center p-4">
        <Navbar></Navbar>
        </div>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

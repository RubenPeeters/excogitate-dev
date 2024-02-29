import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/custom/navbar";
import { ThemeProvider } from "./theme-provider";
import Footer from "@/components/custom/footer";

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
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

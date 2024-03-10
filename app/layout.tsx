import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";

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
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

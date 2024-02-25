import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/custom/navbar";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center p-4">
        <Navbar></Navbar>
        </div>
        {children}
      </body>
    </html>
  );
}

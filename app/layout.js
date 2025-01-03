import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bponi Ecommerce",
  description: "An ecommerce website demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f4f2]`}>
        <Navbar />
        <main className="2xl:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

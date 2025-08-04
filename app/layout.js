import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar-Terminal";
import Footer from "@/components/Footer-Terminal";
import LoadingScreen from "@/components/LoadingScreen-Terminal";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Seasides 2026 - India's Most Loved Cybersecurity Conference",
  description: "Join us for the most innovative cybersecurity conference in India. Free workshops, world-class speakers, and hands-on learning experiences. Feb 20-22, 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Seasides 2026 - India's Most Loved Cybersecurity Conference",
  description: "Join us for the most innovative cybersecurity conference in India. Free workshops, world-class speakers, and hands-on learning experiences.",
  keywords: "cybersecurity, conference, India, Seasides, workshops, training, security professionals",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#0066cc'
      }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066cc',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

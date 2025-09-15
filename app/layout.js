import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import WebVitals from "@/components/WebVitals";
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
  metadataBase: new URL('https://seasides2026.com'),
  title: {
    default: "Seasides - India's Most Loved FREE Cybersecurity Conference",
    template: "%s | Seasides"
  },
  description: "Join India's premier FREE cybersecurity conference. 3 days of learning, workshops, networking & community at International Centre Goa. Feb 19-21, 2026.",
  keywords: ["cybersecurity conference", "free conference India", "cybersecurity workshops", "Goa tech event", "security training", "ethical hacking", "cybersecurity community", "tech conference 2026"],
  authors: [{ name: "Seasides Team" }],
  creator: "Seasides Social Welfare Foundation",
  publisher: "Seasides",
  category: "Technology",
  classification: "Conference",
  
  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seasides2026.com',
    title: "Seasides - India's Most Loved FREE Cybersecurity Conference",
    description: "Join India's premier FREE cybersecurity conference. 3 days of learning, workshops, networking & community at International Centre Goa. Feb 19-21, 2026.",
    siteName: 'Seasides',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Seasides Cybersecurity Conference',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Seasides - India's Most Loved FREE Cybersecurity Conference",
    description: "Join India's premier FREE cybersecurity conference. 3 days of learning, workshops, networking & community.",
    images: ['/twitter-image.jpg'],
    creator: '@seasidesconf',
  },
  
  // Icons
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
  
  // Additional metadata
  alternates: {
    canonical: 'https://seasides2026.com',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <WebVitals />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

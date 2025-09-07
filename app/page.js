import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickySubnav from "@/components/StickySubnav";

// Lazy load heavy components with loading states
const RevolutionHero = dynamic(() => import("@/components/RevolutionHero"), {
  loading: () => <div className="h-screen bg-gradient-to-br from-blue-900 to-purple-900 animate-pulse" />
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
});

const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <div className="h-64 bg-gray-50 dark:bg-gray-800 animate-pulse" />
});

const Sponsors = dynamic(() => import("@/components/Sponsors"), {
  loading: () => <div className="h-80 bg-white dark:bg-gray-900 animate-pulse" />
});

const Venue = dynamic(() => import("@/components/Venue"), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
});

const SocialIntegration = dynamic(() => import("@/components/SocialIntegration"), {
  loading: () => <div className="h-64 bg-blue-50 dark:bg-blue-900 animate-pulse" />
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-80 bg-gray-50 dark:bg-gray-800 animate-pulse" />
});

const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => <div className="h-96 bg-white dark:bg-gray-900 animate-pulse" />
});

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
  <div id="overview" className="scroll-mt-24"><RevolutionHero /></div>
  <StickySubnav />
  <div className="scroll-mt-24"><About /></div>
  <div id="stats" className="scroll-mt-24"><Stats /></div>
  <div id="venue" className="scroll-mt-24"><Venue /></div>
  <div id="sponsors" className="scroll-mt-24"><Sponsors /></div>
  <div id="faq" className="scroll-mt-24"><Faq /></div>
  <div id="social" className="scroll-mt-24"><SocialIntegration /></div>
  <div id="contact" className="scroll-mt-24"><Contact /></div>
      <Footer />
    </main>
  );
}

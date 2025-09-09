import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickySubnav from "@/components/StickySubnav";

// Critical components loaded immediately for LCP
import RevolutionHero from "@/components/RevolutionHero";
import Countdown from "@/components/Countdown";

// Non-critical components lazy loaded with optimized loading states
const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 animate-pulse rounded-lg mx-6" />
});



const SocialIntegration = dynamic(() => import("@/components/SocialIntegration"), {
  loading: () => <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 animate-pulse rounded-lg mx-6" />
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-80 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 animate-pulse rounded-lg mx-6" />
});

const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => <div className="h-96 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-pulse rounded-lg mx-6" />
});

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
  <div id="overview" className="scroll-mt-24"><RevolutionHero /></div>
  <div id="countdown" className="scroll-mt-24"><Countdown /></div>
  <StickySubnav />
  <div id="stats" className="scroll-mt-24"><Stats /></div>
  <div id="faq" className="scroll-mt-24"><Faq /></div>
  <div id="social" className="scroll-mt-24"><SocialIntegration /></div>
  <div id="contact" className="scroll-mt-24"><Contact /></div>
      <Footer />
    </main>
  );
}

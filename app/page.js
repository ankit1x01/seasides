import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Critical components loaded immediately for LCP
import RevolutionHero from "@/components/RevolutionHero";
import Countdown from "@/components/Countdown";

// Non-critical components lazy loaded with optimized loading states
const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 animate-pulse rounded-lg mx-6" />
});

// New homepage sections with Framer Motion animations
const About = dynamic(() => import("@/components/home/About"), {
  loading: () => <div className="h-96 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 animate-pulse rounded-lg mx-6" />
});

const Experience = dynamic(() => import("@/components/home/Experience"), {
  loading: () => <div className="h-96 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 animate-pulse rounded-lg mx-6" />
});

const Atmosphere = dynamic(() => import("@/components/home/Atmosphere"), {
  loading: () => <div className="h-96 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 animate-pulse rounded-lg mx-6" />
});

const NostalgiaGallery = dynamic(() => import("@/components/home/NostalgiaGallery"), {
  loading: () => <div className="h-96 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 animate-pulse rounded-lg mx-6" />
});

const SocialIntegration = dynamic(() => import("@/components/SocialIntegration"), {
  loading: () => <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 animate-pulse rounded-lg mx-6" />
});

const ReachUs = dynamic(() => import("@/components/ReachUs"), {
  loading: () => <div className="h-96 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 animate-pulse rounded-lg mx-6" />
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
      <div id="stats" className="scroll-mt-24"><Stats /></div>
      
      {/* New enhanced homepage sections */}
      <div id="about" className="scroll-mt-24"><About /></div>
      <div id="experience" className="scroll-mt-24"><Experience /></div>
      <div id="atmosphere" className="scroll-mt-24"><Atmosphere /></div>
      <div id="nostalgia" className="scroll-mt-24"><NostalgiaGallery /></div>
      
      {/* Existing sections */}
      <div id="reach-us" className="scroll-mt-24"><ReachUs /></div>
      <div id="faq" className="scroll-mt-24"><Faq /></div>
      <div id="social" className="scroll-mt-24"><SocialIntegration /></div>
      <Footer />
    </main>
  );
}

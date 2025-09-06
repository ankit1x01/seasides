import RevolutionHero from "@/components/RevolutionHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Sponsors from "@/components/Sponsors";
import Venue from "@/components/Venue";
import SocialIntegration from "@/components/SocialIntegration";
import Contact from "@/components/Contact";
import StickySubnav from "@/components/StickySubnav";

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
  <div id="social" className="scroll-mt-24"><SocialIntegration /></div>
  <div id="contact" className="scroll-mt-24"><Contact /></div>
      <Footer />
    </main>
  );
}

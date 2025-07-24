import Hero from "@/components/Hero";
import About from "@/components/AboutEnhanced";
import Stats from "@/components/Stats";
import Workshops from "@/components/WorkshopsEnhanced";
import Sponsors from "@/components/SponsorsEnhanced";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import FloatingActionButton from "@/components/FloatingActionButton";
import NotificationSystem from "@/components/NotificationSystem";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Stats />
      <Workshops />
      <Sponsors />
      <Faq />
      <Contact />
      <FloatingActionButton />
      <NotificationSystem />
    </main>
  );
}

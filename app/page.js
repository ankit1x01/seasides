import Hero from "@/components/Hero";
import About from "@/components/About-Terminal";
import Stats from "@/components/Stats-Terminal";
import Workshops from "@/components/Workshops-Terminal";
import Sponsors from "@/components/Sponsors-Terminal";
import Faq from "@/components/Faq-Terminal";
import Contact from "@/components/Contact-Terminal";
import FloatingActionButton from "@/components/FloatingActionButton-Terminal";
import NotificationSystem from "@/components/NotificationSystem-Terminal";

export default function Home() {
  return (
    <main className="relative bg-black">
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

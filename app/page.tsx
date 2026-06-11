import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import StickyCTA from "@/components/shared/StickyCTA";
import HeroSection from "@/components/sections/HeroSection";
import TrayectoriaSection from "@/components/sections/TrayectoriaSection";
import AcercaSection from "@/components/sections/AcercaSection";
import PilaresSection from "@/components/sections/PilaresSection";
import HumanQuoteSection from "@/components/sections/HumanQuoteSection";
import StatsSection from "@/components/sections/StatsSection";
import TrabajemosSection from "@/components/sections/TrabajemosSection";
import TedSection from "@/components/sections/TedSection";
import LibrosSection from "@/components/sections/LibrosSection";
import EditorialEssaySection from "@/components/sections/EditorialEssaySection";
import EquipoSection from "@/components/sections/EquipoSection";
import MundosSection from "@/components/sections/MundosSection";
import TukuySection from "@/components/sections/TukuySection";
import ColumnasSection from "@/components/sections/ColumnasSection";
import FAQSection from "@/components/sections/FAQSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CTAFinalSection from "@/components/sections/CTAFinalSection";
import ContactoSection from "@/components/sections/ContactoSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrayectoriaSection />
        <AcercaSection />
        <PilaresSection />
        <HumanQuoteSection />
        <StatsSection />
        <TrabajemosSection />
        <TedSection />
        <LibrosSection />
        <EditorialEssaySection />
        <EquipoSection />
        <MundosSection />
        <TukuySection />
        <ColumnasSection />
        <FAQSection />
        <NewsletterSection />
        <CTAFinalSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Highlights from "./components/Highlights";
import AboutSection from "./components/AboutSection";
import SkillsGrid from "./components/SkillsGrid";
import BenefitsRow from "./components/BenefitsRow";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import PartnersStrip from "./components/PartnersStrip";
import GalleryStrip from "./components/GalleryStrip";
import ApplyCTA from "./components/ApplyCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-nmBlack text-nmWhite">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Highlights />
      <AboutSection />
      <SkillsGrid />
      <BenefitsRow />
      <TestimonialsSection />
      <FAQSection />
      <PartnersStrip />
      <GalleryStrip />
      <ApplyCTA />
      <Footer />
    </div>
  );
}

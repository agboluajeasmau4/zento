
import Hero from "../sections/Hero";
import ProblemSection from "../sections/ProblemSection";
import VendorOSShowcase from "../sections/VendorOSShowcase";
import ServicesSection from "../sections/ServicesSection";
import CaseStudiesSection from "../sections/CaseStudiesSection";
import ROICalculator from "../sections/ROICalculator";
import PricingSection from "../sections/PricingSection";
import FinalCTA from "../sections/FinalCTA";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ProblemSection />
      <VendorOSShowcase />
      <ServicesSection />
      <CaseStudiesSection />
      <ROICalculator />
      <PricingSection />
      <FinalCTA />
    </div>
  );
}

export default Home;

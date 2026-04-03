import HeroSection from "../../components/sections/hero/HeroSection";
import ServicesSection from "../../components/sections/services/ServicesSection";
import ProcessSection from "../../components/sections/process/ProcessSection";
import TestimonialSection from "../../components/sections/testimonials/TestimonialSection";

import SEO from "../../components/seo/SEO";
import StatsSection from "../../components/sections/stats/StatsSection";
import Enqueryform from "../../components/sections/cta/Enqueryform";

export default function Home() {
  return (
    <>
      <SEO
        title="Carrier Dreams | Study Abroad & Career Consultancy"
        description="Carrier Dreams is a global education consultancy helping students study abroad in USA, UK, Canada & Australia."
        url="https://carrierdreams.com"
      />

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <Enqueryform />
    </>
  );
}

import HeroSection from "../../components/sections/hero/HeroSection";
import ServicesSection from "../../components/sections/services/ServicesSection";
import ProcessSection from "../../components/sections/process/ProcessSection";
import TestimonialSection from "../../components/sections/testimonials/TestimonialSection";

import SEO from "../../components/seo/SEO";
import StatsSection from "../../components/sections/stats/StatsSection";
import CTASection from "../../components/sections/cta/CTAsection";

export default function Home() {
  return (
    <>
      <SEO
        title="Global Study & Work Consultancy"
        description="Carrier Dreams helps students and professionals achieve international success."
        url="https://carrierdreams.com"
      />

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}

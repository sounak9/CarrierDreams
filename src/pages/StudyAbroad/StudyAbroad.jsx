import StudyCTASection from "../../components/sections/studyAbroad/cta/StudyCTASection";
import DestinationsSection from "../../components/sections/studyAbroad/destinations/DestinationsSection";
import StudyHeroSection from "../../components/sections/studyAbroad/hero/StudyHeroSection";
import SupportSection from "../../components/sections/studyAbroad/support/SupportSection";
import SEO from "../../components/seo/SEO";

const StudyAbroad = () => {
  return (
    <>
      <SEO
        title="Study Abroad | CarrierDreams"
        description="Explore global universities and programs tailored to your career goals."
      />
      <StudyHeroSection />
      <DestinationsSection />
      <SupportSection />
      <StudyCTASection />
    </>
  );
};

export default StudyAbroad;

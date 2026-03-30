import { Helmet } from "react-helmet-async";

import StudyIndiaHeroSection from "../../components/sections/studyIndia/StudyIndiaHeroSection";
import WhyStudyIndiaSection from "../../components/sections/studyIndia/WhyStudyIndiaSection";
import FeaturedUniversitiesSection from "../../components/sections/studyIndia/FeaturedUniversitiesSection";
import AdmissionServicesSection from "../../components/sections/studyIndia/AdmissionServicesSection";
import IndiaCtaSection from "../../components/sections/studyIndia/StudyIndiaCTASection";

const StudyInIndia = () => {
  return (
    <>
      <Helmet>
        <title>
          Study in India | Top Universities, IIT, NIT & Private Colleges |
          CarrierDreams
        </title>

        <meta
          name="description"
          content="Explore the best universities in India including IITs, NITs, and top private universities. CarrierDreams provides expert admission guidance for engineering, medical, and management colleges."
        />

        <meta
          name="keywords"
          content="study in india, top universities in india, IIT colleges, NIT colleges, private universities india, engineering colleges india, admission consultancy india"
        />
      </Helmet>

      <StudyIndiaHeroSection />
      <WhyStudyIndiaSection />
      <FeaturedUniversitiesSection />
      <AdmissionServicesSection />
      <IndiaCtaSection />
    </>
  );
};

export default StudyInIndia;

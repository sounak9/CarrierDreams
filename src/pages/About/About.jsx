import { Helmet } from "react-helmet-async";
import AboutHeroSection from "../../components/sections/AboutUs/AboutHeroSection";
import AboutLegacySection from "../../components/sections/AboutUs/AboutLegacySection";
import AboutCoreValuesSection from "../../components/sections/AboutUs/AboutCoreValuesSection";
import AboutJourneySection from "../../components/sections/AboutUs/AboutJourneySection";
import AboutLeadershipSection from "../../components/sections/AboutUs/AboutLeadershipSection";
import AboutGlobalSection from "../../components/sections/AboutUs/AboutGlobalSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About CarrierDreams | Study Abroad & India Education Consultancy
        </title>

        <meta
          name="description"
          content="CarrierDreams is a leading education consultancy helping students study abroad and in top Indian universities. Explore our mission, vision, and global success journey."
        />

        <meta
          name="keywords"
          content="about CarrierDreams, education consultancy India, study abroad consultants, overseas education, career guidance India"
        />
      </Helmet>

      <AboutHeroSection />
      <AboutLegacySection />
      <AboutCoreValuesSection />
      <AboutJourneySection />
      <AboutLeadershipSection />
      <AboutGlobalSection />
    </>
  );
};

export default About;

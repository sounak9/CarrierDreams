import { Helmet } from "react-helmet-async";
import ContactHeroSection from "../../components/sections/contact/ContactHeroSection";
import ContactBranchesSection from "../../components/sections/contact/ContactBranchesSection";
import ContactFormSection from "../../components/sections/contact/ContactFormSection";

const Contact = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Contact CarrierDreams | Study Abroad & Career Guidance Experts
        </title>

        <meta
          name="description"
          content="Get in touch with CarrierDreams for expert guidance on study abroad, career counseling, and university admissions. Speak with our consultants today."
        />

        <meta
          name="keywords"
          content="contact CarrierDreams, study abroad consultants, education consultancy India, career guidance, overseas education help"
        />
      </Helmet>

      {/* Sections */}
      <ContactHeroSection />
      <ContactBranchesSection />
      <ContactFormSection />
    </>
  );
};

export default Contact;

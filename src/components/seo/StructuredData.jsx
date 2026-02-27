import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Carrier Dreams",
    url: "https://carrierdreams.com",
    logo: "https://carrierdreams.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default StructuredData;

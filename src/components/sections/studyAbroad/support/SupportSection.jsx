import SupportCard from "./SupportCard";

const SupportSection = () => {
  const supportData = [
    {
      icon: "🎓",
      title: "Visa Assistance",
      description:
        "Achieve a 98% visa success rate with our expert documentation and interview preparation.",
      features: ["Mock Interview Sessions", "Document Verification"],
    },
    {
      icon: "💰",
      title: "Scholarship Support",
      description:
        "Access exclusive university grants and international scholarships.",
      features: ["Merit-based Grants", "SOP Assistance"],
    },
    {
      icon: "📘",
      title: "Test Preparation",
      description: "Get the scores you need for IELTS, GRE, GMAT, and TOEFL.",
      features: ["Daily Practice Tests", "One-on-One Feedback"],
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            End-to-End Support
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We handle the complexity so you can focus on your studies. From
            first counseling to landing at your destination.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportData.map((item, index) => (
            <SupportCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Building } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Premium Services
        </motion.h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Expert guidance for every step of your professional and academic
          growth.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<GraduationCap size={22} />}
            title="Study Abroad"
            description="Navigate international admissions, scholarships, and visa processes for top global destinations like UK, USA, and Canada."
            linkText="Explore Destinations →"
          />

          <ServiceCard
            icon={<Building size={22} />}
            title="Study in India"
            description="Strategic counseling for premier Indian institutions including IITs, IIMs, and top private universities for UG and PG programs."
            linkText="Top Indian Colleges →"
          />

          <ServiceCard
            icon={<Briefcase size={22} />}
            title="Job Placements"
            description="Direct recruitment ties with MNCs and Fortune 500 companies in Tech, Finance, Healthcare, and Management sectors."
            linkText="View Job Board →"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

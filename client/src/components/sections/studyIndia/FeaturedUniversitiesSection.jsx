import { motion } from "framer-motion";
import UniversityCard from "./cards/UniversityCard";

import iit from "../../../assets/images/destinations/iit.png";
import privateCollege from "../../../assets/images/destinations/privateCollege.png";

const FeaturedUniversitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* SEO Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities in India for Engineering, Management & Medical
              Studies
            </h2>

            {/* SEO Paragraph */}
            <p className="text-gray-600 leading-relaxed">
              CarrierDreams partners with some of the most prestigious
              universities and institutes in India. From IITs and NITs to
              leading private universities, we help students secure admission in
              top engineering, medical, design, and management colleges across
              India with expert guidance and career counseling.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            {/* IIT CARD */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <UniversityCard
                image={iit}
                tag="Elite Institutions"
                title="IIT & NIT Colleges in India"
                description="India’s premier engineering institutions including the Indian Institutes of Technology (IITs) and National Institutes of Technology (NITs) known for global recognition and academic excellence."
              />
            </motion.div>

            {/* PRIVATE UNIVERSITY CARD */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <UniversityCard
                image={privateCollege}
                tag="Premium Partner"
                title="Top Private Universities in India"
                description="Modern private universities offering world-class infrastructure, industry-focused programs, international collaborations, and strong placement opportunities."
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedUniversitiesSection;

import { motion } from "framer-motion";
import aboutUsfinger from "../../../assets/images/hero/aboutUsfinger.png";

const AboutLegacySection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-500 text-sm font-semibold uppercase">
            Our Legacy
          </span>

          {/* SEO H2 */}
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Empowering Global Ambitions Since 2022
          </h2>

          {/* SEO paragraph */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            CarrierDreams is a leading education consultancy dedicated to
            helping students achieve their dreams of studying abroad and
            securing admissions in top Indian universities. Since 2022, we have
            guided thousands of students toward world-class educational
            opportunities through expert career counseling, personalized
            university selection, and end-to-end admission support.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            From international study programs to premier institutions in India,
            our mission is to simplify the complex admission process and provide
            transparent, result-driven guidance. With a strong network of global
            university partners and experienced consultants, we ensure every
            student receives the right direction for their academic and
            professional success. Today, CarrierDreams stands as a trusted name
            in overseas education and career consulting, helping students build
            successful futures across the globe.
          </p>

          {/* Stats */}
          <div className="flex gap-10">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500">5,000+</h3>
              <p className="text-sm text-gray-500">Students Placed</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-500">200+</h3>
              <p className="text-sm text-gray-500">Partner Universities</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={aboutUsfinger}
            alt="Students success story CarrierDreams"
            className="rounded-2xl shadow-xl"
          />

          {/* Floating testimonial */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
            <p className="text-sm text-gray-600 italic">
              “They didn’t just help me get a visa, they helped me find my
              future.”
            </p>

            <span className="text-xs font-semibold text-gray-800">
              — Rahul M., Oxford University Admit
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLegacySection;

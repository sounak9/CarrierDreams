import { motion } from "framer-motion";
import StudyInIndiaHeroImage from "../../../assets/images/hero/StudyInIndiaHeroImage.png";

const StudyIndiaHeroSection = () => {
  return (
    <section className="relative w-full h-[560px] md:h-[620px] lg:h-[680px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${StudyInIndiaHeroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative max-w-[1250px] mx-auto px-6 h-full flex items-center">
        <div className="max-w-[700px] text-white">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-yellow-500 text-black text-xs font-semibold px-4 py-1 rounded-full mb-6"
          >
            INDIA'S LEADING EDUCATION CONSULTANCY
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Shape Your Future in{" "}
            <span className="text-yellow-400">Top Colleges in India</span>
          </motion.h1>

          {/* SEO Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-200 text-lg mb-8 leading-relaxed"
          >
            Discover the best opportunities to study in India with
            CarrierDreams. From IITs and NITs to top private universities, we
            guide students through engineering, management, medical, and design
            admissions with expert counseling and career guidance.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-[#1f2937]/80 backdrop-blur rounded-xl p-3 flex flex-col md:flex-row gap-3 md:items-center shadow-2xl"
          >
            {/* Course Input */}
            <input
              type="text"
              placeholder="Search Engineering, Medical, or Management Courses"
              className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500"
            />

            {/* City Input */}
            <input
              type="text"
              placeholder="Preferred City (Delhi, Bangalore, Pune...)"
              className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500"
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Find Colleges
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudyIndiaHeroSection;

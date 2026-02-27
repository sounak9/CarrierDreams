import { motion } from "framer-motion";
import HeroForm from "./HeroForm";
import herobg from "../../../assets/images/hero/herobg.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[85vh] flex items-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-white">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl"
        >
          Your Dreams, Our Mission:{" "}
          <span className="text-yellow-400">Global Education</span> & Careers
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-gray-200 max-w-2xl"
        >
          Personalized consultancy for top-tier universities and global job
          placements. Start your journey with the world's most trusted advisors.
        </motion.p>

        {/* Form Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <HeroForm />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

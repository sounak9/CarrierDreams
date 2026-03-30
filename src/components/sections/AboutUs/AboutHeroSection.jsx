import { motion } from "framer-motion";
import AboutUsBackground from "../../../assets/images/hero/AboutUsBackground.png";

const AboutHeroSection = () => {
  return (
    <section className="relative h-[75vh] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={AboutUsBackground}
        alt="CarrierDreams consultancy office"
        className="absolute inset-0 w-full h-auto object-cover"
      />

      {/* LEFT FOCUSED OVERLAY (IMPORTANT FIX) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/95 via-[#0b1220]/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl" // 🔥 THIS FIXES WIDTH
        >
          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-white">
            Bridging the Gap <br />
            Between <span className="text-yellow-400">Dreams</span> and{" "}
            <span className="text-yellow-400">Careers.</span>
          </h1>

          {/* PARAGRAPH */}
          <p className="text-gray-300 mb-6 text-xl md:text-base leading-relaxed">
            At CarrierDreams, we believe that geographic boundaries should never
            limit human potential. As a trusted education consultancy, we
            specialize in guiding students toward top universities in India and
            abroad through strategic career counseling and personalized academic
            planning.
          </p>
          <p className="text-gray-300 mb-6 text-xl md:text-base leading-relaxed">
            Our expertise spans domestic and international education consulting,
            enabling students to access world-class institutions, global
            opportunities, and future-ready careers. With a commitment to
            transparency, excellence, and results, we empower aspiring students
            to transform their ambitions into successful career pathways.
          </p>

          {/* BADGES */}
          <div className="flex gap-3 flex-wrap">
            <span className="bg-white/10 text-white backdrop-blur px-4 py-2 rounded-full text-xs md:text-sm">
              ISO 9001:2015 Certified
            </span>

            <span className="bg-white/10 text-white backdrop-blur px-4 py-2 rounded-full text-xs md:text-sm">
              98% Success Rate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

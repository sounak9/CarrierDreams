import { motion } from "framer-motion";
import studyHero from "../../../../assets/images/hero/studyHero.png";

const StudyHeroSection = () => {
  return (
    <section
      className="relative min-h-[75vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${studyHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-yellow-500 text-black text-xs font-semibold px-4 py-1 rounded-full mb-6"
        >
          GLOBAL EDUCATION EXPERTS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-6xl font-extrabold max-w-3xl leading-tight"
        >
          Your Global Future <br /> Starts Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl"
        >
          Access world-class education with CarrierDreams. We bridge the gap
          between your aspirations and top global universities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 max-w-2xl"
        >
          <input
            type="text"
            placeholder="Search countries or courses..."
            className="flex-1 px-6 py-4 text-lg rounded-xl bg-white/20 backdrop-blur border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button className="bg-yellow-500 text-black px-8 py-4 text-lg rounded-xl font-semibold hover:bg-yellow-600 transition shadow-lg">
            Explore Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyHeroSection;

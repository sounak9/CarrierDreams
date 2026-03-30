import { motion } from "framer-motion";

const ContactHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <span className="inline-block bg-yellow-100 text-yellow-600 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          CONTACT SUPPORT
        </span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-5xl font-bold text-gray-900"
        >
          Get in <span className="text-yellow-500">Touch</span>
        </motion.h1>

        {/* Description */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-xl">
          Connect with our expert education consultants for personalized
          guidance on studying abroad and career planning. Your journey begins
          with a simple conversation.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">98%</h3>
            <p className="text-xl text-gray-500">Visa Success</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800">10k+</h3>
            <p className="text-xl text-gray-500">Students Placed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;

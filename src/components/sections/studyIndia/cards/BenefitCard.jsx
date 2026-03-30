import { motion } from "framer-motion";

const BenefitCard = ({ icon, title, description, bg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${bg}`}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;

import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, linkText }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        bg-white
        rounded-2xl
        shadow-lg
        p-8
        space-y-5
        transition
      "
    >
      {/* Icon Box */}
      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-500 text-xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      {/* Link */}
      <button className="text-yellow-500 font-semibold text-sm hover:underline">
        {linkText}
      </button>
    </motion.div>
  );
};

export default ServiceCard;

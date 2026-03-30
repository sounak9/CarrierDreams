import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, points, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl 
      p-10 min-h-[260px] shadow-lg hover:shadow-xl transition"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl mb-7 text-xl ${color}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Points */}
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-gray-300"
          >
            <span className="text-yellow-400">✔</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;

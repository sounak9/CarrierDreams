import { motion } from "framer-motion";

const TrendingStreamsCard = () => {
  const streams = [
    { name: "Engineering", icon: "⚙️" },
    { name: "Management", icon: "💼" },
    { name: "Medical", icon: "🩺" },
    { name: "Design & Arts", icon: "🎨" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
    >
      <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-6">
        📈 Trending Streams
      </h3>

      <div className="space-y-3">
        {streams.map((stream, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 6 }}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600">
                {stream.icon}
              </div>

              <span className="text-gray-700 text-sm font-medium">
                {stream.name}
              </span>
            </div>

            <span className="text-gray-400">›</span>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 w-full bg-[#0f172a] text-white py-3 rounded-lg text-sm font-semibold"
      >
        View All Streams
      </motion.button>
    </motion.div>
  );
};

export default TrendingStreamsCard;

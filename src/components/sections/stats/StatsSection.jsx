import { motion } from "framer-motion";

const statsData = [
  { value: "10,000+", label: "Students Placed" },
  { value: "500+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "15+", label: "Global Offices" },
];

const StatsSection = () => {
  return (
    <section className="bg-yellow-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold">{stat.value}</h2>
              <p className="text-sm uppercase tracking-wide opacity-90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

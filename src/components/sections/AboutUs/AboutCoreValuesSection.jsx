import { motion } from "framer-motion";
import { Eye, BadgeCheck, Globe } from "lucide-react";

const values = [
  {
    icon: <Eye size={20} />,
    title: "Full Transparency",
    desc: "We uphold complete transparency in every step of your journey. With no hidden costs or misleading promises, we provide clear, structured guidance for your entire university application process from the very beginning.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "Expert Guidance",
    desc: "Our team of certified education consultants brings over 15 years of experience in international and domestic education systems, ensuring accurate advice, strategic planning, and successful admission outcomes.",
  },
  {
    icon: <Globe size={20} />,
    title: "Global Reach",
    desc: "Our team of certified education consultants brings over 15 years of experience in international and domestic education systems, ensuring accurate advice, strategic planning, and successful admission outcomes.",
  },
];

const AboutCoreValuesSection = () => {
  return (
    <section className="py-20 bg-[#f5f1e9]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Core Values
          </h2>

          {/* underline */}
          <div className="w-16 h-[3px] bg-yellow-500 mx-auto mt-3 mb-4 rounded-full" />

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            What sets CarrierDreams apart is our unwavering commitment to these
            three pillars of excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValuesSection;

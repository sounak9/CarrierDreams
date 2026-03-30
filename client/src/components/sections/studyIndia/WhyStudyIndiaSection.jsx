import { motion } from "framer-motion";
import BenefitCard from "./cards/BenefitCard";
import TrendingStreamsCard from "./cards/TrendingStreamsCard";

const WhyStudyIndiaSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <TrendingStreamsCard />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Why Study in India?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-500 mb-8 max-w-xl"
            >
              India is rapidly becoming a global education hub, offering a
              unique blend of ancient wisdom and modern innovation.
            </motion.p>

            {/* Benefit Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <BenefitCard
                  icon="💳"
                  title="Affordable Quality"
                  description="Top-tier education at a fraction of the cost compared to Western universities."
                  bg="bg-yellow-100 text-yellow-600"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <BenefitCard
                  icon="👥"
                  title="Cultural Diversity"
                  description="Experience a vibrant multicultural environment that fosters global perspective."
                  bg="bg-yellow-100 text-yellow-600"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <BenefitCard
                  icon="🚀"
                  title="Growth Hub"
                  description="India’s booming economy provides huge career opportunities in tech and business."
                  bg="bg-green-100 text-green-600"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyIndiaSection;

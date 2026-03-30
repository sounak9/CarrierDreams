import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Foundation",
    desc: "Established with a vision to redefine education consultancy, delivering transparent guidance and reliable admission support.",
  },
  {
    year: "2023",
    title: "Proven Student Success",
    desc: "Successfully guided hundreds of students into top international universities, building trust in overseas education consulting.",
  },
  {
    year: "2024",
    title: "Expanding Global Network",
    desc: "Formed partnerships with leading universities worldwide, expanding access to high-quality academic opportunities.",
  },
  {
    year: "2025",
    title: "Innovation & Digital Advancement",
    desc: "Launched AI-powered career profiling to deliver personalized and data-driven academic guidance.",
  },
];

const AboutJourneySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Journey of Growth
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            A timeline showcasing our evolution as a trusted education
            consultancy, helping students achieve global academic success.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-yellow-300" />

          {/* Items */}
          <div className="grid md:grid-cols-4 gap-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-2 
                  ${
                    index === timeline.length - 1
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "border-yellow-500 text-yellow-600 bg-white"
                  } font-semibold`}
                >
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="mt-6 font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourneySection;

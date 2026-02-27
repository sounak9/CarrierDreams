import { motion } from "framer-motion";
import process from "../../../assets/images/hero/process.png";

const steps = [
  {
    number: "1",
    title: "Profile Evaluation",
    description:
      "Expert assessment of your academic and professional background.",
  },
  {
    number: "2",
    title: "Target Selection",
    description:
      "Curating the perfect list of universities and job opportunities.",
  },
  {
    number: "3",
    title: "Application & Visa",
    description: "End-to-end documentation support with high approval rates.",
  },
  {
    number: "4",
    title: "Pre & Post Departure",
    description: "Financial advice, accommodation, and career networking.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Small Tag */}
          <span className="text-yellow-500 font-semibold uppercase text-sm">
            Our Strategy
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            4 Simple Steps to Your Global Career
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg">
            We take the complexity out of the process, ensuring you focus on
            your growth while we handle the logistics.
          </p>

          {/* Steps */}
          <div className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {/* Number Circle */}
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 font-bold flex items-center justify-center">
                  {step.number}
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-yellow-500 rounded-2xl"></div>

          <img
            src={process}
            alt="Consultation Process"
            className="relative rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

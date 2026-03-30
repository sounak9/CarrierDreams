import { motion } from "framer-motion";
import { Pencil, Landmark, FileText, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <Pencil size={26} />,
    title: "Entrance Exam Prep",
    description:
      "Expert coaching and resources for JEE, NEET, CAT, and GATE exams in India.",
    points: ["Mock Test Series", "Strategy Workshops"],
    bg: "bg-yellow-500",
  },
  {
    icon: <Landmark size={26} />,
    title: "Counseling",
    description:
      "Personalized guidance to match your profile with the right university and course.",
    points: ["Aptitude Analysis", "Seat Allotment Support"],
    bg: "bg-yellow-500",
  },
  {
    icon: <FileText size={26} />,
    title: "Documentation",
    description:
      "End-to-end assistance with application forms, transcripts, and reservation certificates.",
    points: ["Verification Check", "Scholarship App"],
    bg: "bg-green-500",
  },
  {
    icon: <GraduationCap size={26} />,
    title: "Scholarship Aid",
    description:
      "Assistance in applying for merit-based and government scholarships.",
    points: ["Grant Discovery", "Financial Planning"],
    bg: "bg-purple-500",
  },
];

const AdmissionServicesSection = () => {
  return (
    <section className="relative py-28 bg-[#071a33] overflow-hidden">
      {/* background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071a33] via-[#0b1f3c] to-[#071a33]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Strategic Admission Services
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We simplify the competitive Indian education landscape with
            expert-led counseling and support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 
              backdrop-blur-md hover:border-white/20 transition shadow-lg"
            >
              {/* icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg}`}
              >
                {service.icon}
              </div>

              {/* title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* points */}
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-yellow-400">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionServicesSection;

import { motion } from "framer-motion";

import shivam from "../../../assets/images/shivam.png";
import Sachin from "../../../assets/images/Sachin.png";

const team = [
  {
    name: "Shivam Kumar",
    role: "Founder & CEO",
    desc: "A visionary leader in global education consulting with 20+ years of experience in international academic strategy and student success.",
    img: shivam,
  },
  {
    name: "Sachin Singh",
    role: "Head of Admissions",
    desc: "Expert in global university admissions, helping students secure placements in top institutions through strategic guidance.",
    img: Sachin,
  },
];

const AboutLeadershipSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yellow-500 text-sm font-semibold uppercase">
              The Experts
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
              Leadership Team
            </h2>
          </motion.div>

          <p className="text-gray-500 max-w-md text-sm mt-4 md:mt-0">
            Driven by a passion for excellence and a commitment to global
            education standards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-yellow-500 text-xs font-semibold uppercase">
                  {member.role}
                </p>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadershipSection;

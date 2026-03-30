import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import worldMap from "../../../assets/images/hero/worldMap.png";

const AboutGlobalSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT - MAP */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-4 rounded-2xl shadow-md"
        >
          <img
            src={worldMap}
            alt="Global education network map"
            className="rounded-xl w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <span className="text-yellow-500 text-sm font-semibold uppercase">
            Our Presence
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2 mb-5">
            A Truly Global Network
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            CarrierDreams operates as a globally connected education consultancy
            with a strong presence across India and international locations. Our
            network empowers students to access top universities and global
            career opportunities with confidence.
          </p>

          {/* Info Blocks */}
          <div className="space-y-5">
            {/* India */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg">
                <MapPin size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  India (Headquarters)
                </h4>
                <p className="text-sm text-gray-500">
                  Presence across major metropolitan cities with dedicated
                  student support centers.
                </p>
              </div>
            </div>

            {/* Global */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg">
                <Globe size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Global Partner Network
                </h4>
                <p className="text-sm text-gray-500">
                  USA, UK, Canada, Australia, Germany, Ireland and other leading
                  education destinations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGlobalSection;

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import contactUs from "../../../assets/images/hero/contactUs.png";

const branches = [
  {
    city: "Mumbai, India",
    type: "HEADQUARTERS",
    address: "1204, Maker Chambers V, Nariman Point, Mumbai - 400021",
    phone: "+91 22 4567 8900",
    email: "mumbai@carrierdreams.com",
    active: true,
  },
  {
    city: "New Delhi, India",
    type: "",
    address: "Connaught Place, 4th Floor, Statesman House, New Delhi",
    phone: "+91 11 2345 6789",
    active: true,
  },
  {
    city: "London, UK",
    type: "",
    address: "88 Kingsway, Holborn, London WC2B 6AA, United Kingdom",
    phone: "+44 20 7123 4567",
    active: false,
  },
];

const ContactBranchesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Branches</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search city or country..."
            className="w-full p-3 rounded-lg border border-gray-200 mb-6 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Branch Cards */}
          <div className="space-y-4">
            {branches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-xl p-5 shadow-sm border 
                ${item.active ? "border-yellow-400" : "border-gray-100"}`}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <div>
                    {item.type && (
                      <span className="text-xs text-yellow-500 font-semibold">
                        {item.type}
                      </span>
                    )}
                    <h3 className="font-semibold text-gray-800">{item.city}</h3>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full 
                    ${item.active ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}
                  >
                    {item.active ? "Open Now" : "Closed"}
                  </span>
                </div>

                {/* Address */}
                <p className="text-sm text-gray-500 flex gap-2 items-start mb-2">
                  <MapPin size={16} /> {item.address}
                </p>

                {/* Phone */}
                <p className="text-sm text-gray-500 flex gap-2 items-center mb-2">
                  <Phone size={16} /> {item.phone}
                </p>

                {/* Email */}
                {item.email && (
                  <p className="text-sm text-gray-500 flex gap-2 items-center mb-4">
                    <Mail size={16} /> {item.email}
                  </p>
                )}

                {/* Buttons */}
                {item.active && (
                  <div className="flex gap-3">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600 transition">
                      Get Directions
                    </button>

                    <button className="border border-green-500 text-green-600 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition">
                      WhatsApp
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE - MAP */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-3 relative"
        >
          {/* IMAGE INSTEAD OF MAP */}
          <img
            src={contactUs}
            alt="Our global office locations"
            className="w-full h-[700px] object-cover rounded-xl"
          />

          {/* Bottom Bar */}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBranchesSection;

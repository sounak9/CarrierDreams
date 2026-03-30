import { motion } from "framer-motion";
import { useState } from "react";

const IndiaCtaSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    stream: "",
    exam: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Yellow Container */}
        <div className="relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-3xl shadow-2xl p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
          {/* curved highlight */}

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Start Your Indian <br /> Success Story
            </h2>

            <p className="text-white/90 max-w-lg mb-8 text-lg">
              Connect with our domestic education consultants for a roadmap to
              India's top universities. Your ambition deserves the best
              guidance.
            </p>

            {/* avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <span className="text-white font-medium">
                Over 20,000 students placed in India
              </span>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            {/* row */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  FULL NAME
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  PHONE NUMBER
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="+91 00000 00000"
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Target Stream */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                TARGET STREAM
              </label>

              <select
                name="stream"
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>Engineering (B.Tech/BE)</option>
                <option>Management (MBA)</option>
                <option>Medical (MBBS)</option>
                <option>Design</option>
              </select>
            </div>

            {/* Preferred Exam */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                PREFERRED EXAM
              </label>

              <select
                name="exam"
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>JEE Main / Advanced</option>
                <option>NEET</option>
                <option>CAT</option>
                <option>Other</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-md transition"
            >
              Get Free Counseling
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default IndiaCtaSection;

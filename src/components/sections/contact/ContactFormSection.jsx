import { useState } from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Study Abroad",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess("✅ Your inquiry has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Study Abroad",
        message: "",
      });
    } catch (err) {
      setError("❌ Failed to submit form. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden"
        >
          {/* LEFT PANEL */}
          <div className="bg-yellow-500 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send an Inquiry</h2>

              <p className="text-sm text-white/90">
                Fill out the form and our expert consultants will get back to
                you within 24 hours.
              </p>
            </div>

            <div className="mt-10 text-sm space-y-3">
              <p>📞 1800-900-3000</p>
              <p>📧 help@carrierdreams.com</p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="input"
              >
                <option>Study Abroad</option>
                <option>Study in India</option>
                <option>Job Assistance</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
              className="input h-28 resize-none"
            />

            {/* Messages */}
            {success && <p className="text-green-600 text-sm">{success}</p>}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              {loading ? "Submitting..." : "Submit Inquiry →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { submitContact } from "../../../services/contactService";

const Enqueryform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setIsError(false);

    try {
      const res = await submitContact(formData);
      setResponseMsg(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setIsError(true);
      setResponseMsg(err.response?.data?.error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="consultation" className="bg-yellow-500 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-2xl grid lg:grid-cols-2 overflow-hidden">
          {/* LEFT SIDE */}
          <div className="p-10 bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Start Your Journey Today
            </h2>

            <p className="text-gray-600 mt-4">
              Fill in your details and our consultant will contact you within 24
              hours.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Free Initial Assessment",
                "No Hidden Service Charges",
                "Direct University Tie-ups",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-yellow-500" size={20} />
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                {loading ? "Submitting..." : "Book Free Consultation"}
              </button>

              {responseMsg && (
                <p
                  className={`text-sm mt-2 ${
                    isError ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {responseMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enqueryform;

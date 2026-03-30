import { useState } from "react";
import { submitContact } from "../../../../services/contactService";

const StudyCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    phone: "",
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
      await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Interested in Study Abroad - ${formData.destination}`,
      });

      setResponseMsg("Request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        destination: "",
        phone: "",
      });
    } catch (err) {
      setIsError(true);
      setResponseMsg("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-100 py-24">
      {/* FULL WIDTH YELLOW BACKGROUND */}
      <div className="bg-yellow-500 py-16 relative overflow-hidden">
        {/* Decorative Top Right Shape */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 opacity-40 rounded-bl-full"></div>

        {/* INNER CENTERED CONTENT */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>

              <p className="text-white/90 mb-8 leading-relaxed max-w-md">
                Speak with our expert counselors today. We'll help you find the
                right course, country, and career path based on your profile.
              </p>

              {/* Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full border-2 border-yellow-500"></div>
                  <div className="w-10 h-10 bg-white rounded-full border-2 border-yellow-500"></div>
                  <div className="w-10 h-10 bg-white rounded-full border-2 border-yellow-500"></div>
                </div>
                <span className="text-sm font-medium">
                  Join 5,000+ successful students
                </span>
              </div>
            </div>

            {/* RIGHT FORM CARD */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase">
                    Desired Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  >
                    <option value="">Select Country</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition shadow-md"
                >
                  {loading ? "Submitting..." : "Request Free Callback"}
                </button>

                {/* Terms */}
                <p className="text-xs text-center text-gray-400">
                  By submitting, you agree to our Terms of Service & Privacy
                  Policy.
                </p>

                {/* Response Message */}
                {responseMsg && (
                  <p
                    className={`text-sm text-center ${isError ? "text-red-500" : "text-green-600"}`}
                  >
                    {responseMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyCTASection;

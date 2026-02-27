import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import logo from "../../assets/images/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-blue-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COLUMN 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Carrier Dreams" className="h-16" />
              <span className="text-2xl font-bold">
                <span className="text-yellow-400">Carrier</span>
                <span className="text-black">Dreams</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              Leading education and career consultancy helping students reach
              their full potential across borders.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#132544] hover:bg-yellow-500 transition cursor-pointer"
                >
                  <Icon size={16} className="text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">DESTINATIONS</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Study in USA",
                "Study in UK",
                "Study in Canada",
                "Study in Australia",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Success Stories",
                "Partner Universities",
                "Contact Us",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">OUR OFFICE</h4>

            <div className="flex gap-3 text-sm text-gray-600 mb-4">
              <MapPin size={16} className="text-yellow-400 mt-1" />
              <span>
                123 Global Avenue, Tech Park Phase 1, Bangalore, KA - 560001
              </span>
            </div>

            <div className="flex gap-3 text-sm text-gray-600">
              <Phone size={16} className="text-yellow-400 mt-1" />
              <span>+91 80 4567 8900</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#1f2f4d] mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CarrierDreams Consultancy Services. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

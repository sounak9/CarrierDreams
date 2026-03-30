import DestinationCard from "./DestinationCard";
import FilterSidebar from "./FilterSidebar";

import usa from "../../../../assets/images/destinations/usa.png";
import uk from "../../../../assets/images/destinations/uk.png";
import canada from "../../../../assets/images/destinations/canada.png";
import australia from "../../../../assets/images/destinations/australia.png";

const DestinationsSection = () => {
  const destinations = [
    {
      image: usa,
      country: "United States of America",
      description:
        "Home to Ivy League excellence and cutting-edge research opportunities.",
      tags: ["Ivy League", "STEM", "Business"],
    },
    {
      image: uk,
      country: "United Kingdom",
      description:
        "Prestigious Russell Group universities offering 1-year Master's programs.",
      tags: ["1-Year Masters", "QS Top Ranked"],
    },
    {
      image: canada,
      country: "Canada",
      description:
        "Clear pathways to permanent residency and high quality of life.",
      tags: ["PR Friendly", "Affordable Fees"],
    },
    {
      image: australia,
      country: "Australia",
      description: "Exceptional student support and vibrant campus life.",
      tags: ["High Living Standards", "Work Rights"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Destinations
              </h2>
              <p className="text-gray-600 mt-2">
                Explore our most requested study locations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {destinations.map((item, index) => (
                <DestinationCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

import { Search } from "lucide-react";

const HeroForm = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl">
      <div className="grid md:grid-cols-3 gap-6 items-end">
        {/* Course Field */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">
            I Want To Study
          </label>

          <select
            className="
              w-full
              bg-gray-100
              border
              border-gray-200
              rounded-xl
              px-4
              py-3
              text-gray-700
              font-medium
              focus:outline-none
              focus:ring-2
              focus:ring-yellow-400
              focus:border-yellow-400
              transition
            "
          >
            <option>Select Course / Field</option>
            <option>Engineering</option>
            <option>Management</option>
            <option>Medical</option>
          </select>
        </div>

        {/* Destination Field */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">
            Preferred Destination
          </label>

          <select
            className="
              w-full
              bg-gray-100
              border
              border-gray-200
              rounded-xl
              px-4
              py-3
              text-gray-700
              font-medium
              focus:outline-none
              focus:ring-2
              focus:ring-yellow-400
              focus:border-yellow-400
              transition
            "
          >
            <option>Select Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex">
          <button
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-yellow-500
              text-white
              font-semibold
              rounded-xl
              px-6
              py-3
              shadow-md
              transition
              duration-300
              hover:bg-yellow-600
              hover:shadow-lg
            "
          >
            <Search size={18} />
            Find Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;

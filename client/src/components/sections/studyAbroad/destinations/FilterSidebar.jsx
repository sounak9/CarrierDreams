const FilterSidebar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h4 className="font-semibold text-gray-900 mb-6">Filter Programs</h4>

      {/* Study Level */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-3">STUDY LEVEL</p>

        <div className="space-y-2 text-sm text-gray-600">
          {[
            "Undergraduate",
            "Postgraduate",
            "Short Courses",
            "PhD / Research",
          ].map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Intake Season */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">
          INTAKE SEASON
        </p>

        <div className="space-y-2 text-sm text-gray-600">
          {["Fall 2024", "Spring 2025"].map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input type="radio" name="intake" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <button className="mt-8 w-full bg-gray-100 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
        Reset All
      </button>
    </div>
  );
};

export default FilterSidebar;

const DestinationCard = ({ image, country, description, tags }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={country} className="w-full h-full object-cover" />

        <span className="absolute top-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          {country}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{country}</h3>

        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="mt-6 text-yellow-500 font-semibold text-sm hover:underline">
          Explore Universities →
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;

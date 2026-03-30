const UniversityCard = ({ image, title, description, tag }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {tag && (
          <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full mb-3">
            {tag}
          </span>
        )}

        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default UniversityCard;

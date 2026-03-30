const SupportCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-xl mb-6 text-xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-yellow-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="mt-6 text-yellow-500 font-semibold text-sm hover:underline">
        Learn more
      </button>
    </div>
  );
};

export default SupportCard;

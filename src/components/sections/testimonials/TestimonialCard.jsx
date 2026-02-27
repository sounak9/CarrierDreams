import { Star } from "lucide-react";

const TestimonialCard = ({ image, name, country, message }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
      />

      {/* Stars */}
      <div className="flex justify-center gap-1 mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{message}</p>

      {/* Name */}
      <h4 className="font-semibold text-gray-900">{name}</h4>
      <span className="text-sm text-gray-500">{country}</span>
    </div>
  );
};

export default TestimonialCard;

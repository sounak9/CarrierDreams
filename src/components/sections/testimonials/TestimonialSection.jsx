import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Aditi Sharma",
    country: "Studying in UK",
    message:
      "Carrier Dreams guided me throughout my application and visa process. I got admission into my dream university!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Verma",
    country: "Working in Canada",
    message:
      "Their career counseling helped me land a high-paying job abroad. Truly professional service.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sneha Patel",
    country: "Studying in USA",
    message:
      "From documentation to interview prep, they handled everything smoothly. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Success Stories
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from our students and professionals who achieved global success.
        </p>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

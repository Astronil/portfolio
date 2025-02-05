import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="min-w-full p-8 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
      <img
        src="https://via.placeholder.com/100"
        alt={testimonial.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
      <p className="text-gray-500 mb-4">{testimonial.role}</p>
      <blockquote className="text-gray-700 italic">
        {testimonial.quote}
      </blockquote>
    </div>
  );
};

export default TestimonialCard;

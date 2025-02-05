import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Professor John Doe",
    role: "Professor of Computer Science",
    quote:
      "John has shown exceptional skills in both front-end and back-end development. He consistently delivers high-quality work.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Software Engineer at Google",
    quote:
      "Working with John was a pleasure. His problem-solving skills are top-notch, and he is always eager to learn and improve.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Friend",
    quote:
      "John is not only talented but also a great team player. He always goes the extra mile to help others.",
  },
  {
    id: 4,
    name: "Bob Brown",
    role: "Client",
    quote:
      "John delivered our project ahead of schedule and exceeded our expectations. Highly recommend!",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
      <motion.div
        className="overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <div className="flex transition-transform duration-500">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSlider;

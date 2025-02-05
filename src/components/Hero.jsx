import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Full-Stack Web Developer
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Expertise in building scalable web applications and innovative
            solutions.
          </motion.p>
          <motion.button
            className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

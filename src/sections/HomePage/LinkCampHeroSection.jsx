'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
];

const LinkCampHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Slider - Crossfade */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00629B]/80 via-[#004D7A]/70 to-[#003A5C]/80"></div>
        </motion.div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00629B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0093D0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-10"></div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          LINK CAMP '25
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto"
        >
          Learning, Integration, Networking & Knowledge
        </motion.p>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
            <p className="text-black-200 text-xs uppercase tracking-wider mb-1">Date</p>
            <p className="text-black text-lg font-semibold">24th January 2026</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
            <p className="text-black-200 text-xs uppercase tracking-wider mb-1">Venue</p>
            <p className="text-black text-lg font-semibold">Kochi, Kerala</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
            <p className="text-black-200 text-xs uppercase tracking-wider mb-1">Deadline</p>
            <p className="text-black text-lg font-semibold">7th January 2026</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://ieee-link.org/Link_Camp_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#00629B] font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 text-lg"
          >
            Apply Now
          </a>
        </motion.div>

        {/* IEEE Branding */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-blue-200 text-sm"
        >
          Organized by IEEE LINK
        </motion.p>
      </div>
    </section>
  );
};

export default LinkCampHeroSection;

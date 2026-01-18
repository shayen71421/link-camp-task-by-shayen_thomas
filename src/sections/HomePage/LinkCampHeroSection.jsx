import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LinkCampHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00629B] via-[#004D7A] to-[#003A5C] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00629B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0093D0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        {/* IEEE LINK Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/images/logo.svg"
            alt="IEEE LINK"
            width={120}
            height={60}
            className="h-16 w-auto"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          LINK CAMP <span className="text-[#0093D0]">2025</span>
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
            <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Date</p>
            <p className="text-white text-lg font-semibold">24th January 2026</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
            <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Venue</p>
            <p className="text-white text-lg font-semibold">Kochi, Kerala</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
            <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Deadline</p>
            <p className="text-white text-lg font-semibold">7th January 2026</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://ieee-link.org/linkcamp2025"
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

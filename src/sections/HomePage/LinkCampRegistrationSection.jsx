import React from 'react';
import { motion } from 'framer-motion';

const LinkCampRegistrationSection = () => {
  return (
    <section id="registration-section" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 italic mb-6 text-lg">
            "A new generation must rise. The torch is ready for those who dare to lead."
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Call for Leaders
          </h2>
          
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            IEEE Kerala Section is calling for bold thinkers, driven doers and fearless leaders. 
            Step into a leadership role that lets you create impact, influence a global network 
            and leave a legacy beyond college walls.
          </p>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            This is not just an application. It's a chance to influence a global network, 
            create lasting impact and leave a legacy that outlives your tenure.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-sm">
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">Kochi</span> • 24 January 2026
            </div>
            <div className="text-gray-600">
              Deadline: <span className="font-semibold text-gray-900">07 January 2026</span>
            </div>
          </div>
          
          <a
            href="https://ieee-link.org/linkcamp2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00629B] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#004D7A] transition duration-300 text-lg"
          >
            Apply Now
          </a>

          <p className="mt-8 text-gray-500 text-sm italic">
            Limited seats. Big opportunities. The torch is waiting.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkCampRegistrationSection;

import React from 'react';
import { motion } from 'framer-motion';

const LinkCampAboutSection = () => {
  const features = [
    {
      title: 'Technical Sessions',
      description: 'Learn from industry experts and thought leaders in emerging technologies'
    },
    {
      title: 'Networking',
      description: 'Connect with fellow students, professionals, and IEEE members'
    },
    {
      title: 'Workshops',
      description: 'Practical experience with cutting-edge tools and frameworks'
    },
    {
      title: 'Career Opportunities',
      description: 'Connect with leading companies and explore opportunities'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About LINK CAMP
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LINK CAMP 2025 is a premier initiative by IEEE LINK designed to empower students
            with knowledge, skills, and connections needed to excel in the technology industry.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* IEEE Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#00629B] text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-3">IEEE LINK</h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            IEEE LINK is committed to connecting the next generation of technology professionals. 
            We foster innovation, conduct research, and advance professional practices for the benefit of humanity.
          </p>
        </motion.div>

        {/* Who Should Attend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Who Should Attend?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['College Students', 'IEEE Members', 'Tech Enthusiasts', 'Career Seekers'].map((item, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkCampAboutSection;

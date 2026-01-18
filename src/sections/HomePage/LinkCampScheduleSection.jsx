import React from 'react';
import { motion } from 'framer-motion';

const LinkCampScheduleSection = () => {
  const timelineData = [
    { 
      date: '30th December 2025', 
      title: 'Call for Applications Opens',
      description: 'Applications open for LINK CAMP 2025'
    },
    { 
      date: '31st Dec 2025 - 7th Jan 2026', 
      title: 'Applications Open',
      description: 'Submit your application during this period'
    },
    { 
      date: '7th January 2026', 
      title: 'Applications Close',
      description: 'Deadline for all applications'
    },
    { 
      date: '12th - 19th January 2026', 
      title: 'Preliminary Evaluation',
      description: 'Review and evaluation of applications'
    },
    { 
      date: '24th January 2026', 
      title: 'LINK CAMP',
      description: 'The main event at Kochi, Kerala'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Timeline
          </h2>
          <p className="text-gray-600">
            Key dates for LINK CAMP 2025
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start ${index !== timelineData.length - 1 ? 'mb-8' : ''} ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Vertical Line - starts below dot with gap, only show if not last item */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-8 w-0.5 bg-[#00629B]/20" style={{ height: 'calc(100% - 8px)' }}></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00629B] rounded-full border-4 border-white shadow-md z-10 mt-1"></div>
              
              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              }`}>
                <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[#00629B] font-semibold text-sm">{item.date}</span>
                  <h3 className="text-gray-900 font-bold text-lg mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkCampScheduleSection;

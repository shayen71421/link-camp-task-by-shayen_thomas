import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const LinkCampNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#1a3a4a] shadow-sm">
      <div className="w-full px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left with space */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/images/logo.svg"
              alt="IEEE LINK"
              width={100}
              height={50}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </motion.a>

          {/* Navigation + CTA - Right with tight spacing */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-300 hover:text-white font-medium transition text-sm"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="https://ieee-link.org/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 hover:text-white font-medium transition text-sm"
            >
              IEEE LINK
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://ieee-link.org/Link_Camp_2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00629B] text-white font-medium py-2 px-5 rounded-lg hover:bg-[#004D7A] transition text-sm"
            >
              Apply Now
            </motion.a>
          </div>

          {/* Mobile Menu Button - Right */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-700"
          >
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-gray-300 hover:text-white font-medium py-2 px-4 transition text-sm"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://ieee-link.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-medium py-2 px-4 transition text-sm"
              >
                IEEE LINK
              </a>
              <a
                href="https://ieee-link.org/linkcamp2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00629B] text-white font-medium py-2 px-4 rounded-lg text-center text-sm mx-4 mt-2"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default LinkCampNavbar;

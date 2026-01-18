"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
          Page Not Found
        </h2>
        <p className="text-blue-100 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300 transform hover:scale-105"
        >
          Back to Home
        </Link>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-blue-200 text-sm"
      >
        LINK CAMP 2025 | IEEE LINK
      </motion.p>
    </div>
  );
}

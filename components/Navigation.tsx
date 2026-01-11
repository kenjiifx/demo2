"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/">
            <motion.div
              className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Home Contractor Pro
              </span>
            </motion.div>
          </Link>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <Link href="/">
              <motion.div
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold relative group"
                whileHover={{ y: -2 }}
              >
                Home
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold relative group"
                whileHover={{ y: -2 }}
              >
                Services
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold premium-shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

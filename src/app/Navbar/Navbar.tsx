"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Import X icon from lucide-react

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    exit: { opacity: 0, y: 20 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg shadow-md z-50 border-b border-gray-600 px-4 mb-4">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold text-white truncate max-w-[25%]">
          <Link href="/">StoryLoft</Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-4 text-xs sm:text-sm">
          <Link href="/" className="text-white hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/novels" className="text-white hover:text-blue-500 transition">
            Novels
          </Link>
          <Link href="/categories" className="text-white hover:text-blue-500 transition">
            Categories
          </Link>
          <Link href="/about" className="text-white hover:text-blue-500 transition">
            About Us
          </Link>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="bg-transparent border-2 border-blue-500 text-blue-500 px-4 py-2 text-xs sm:text-sm rounded-full font-bold hover:bg-blue-500/10 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-transparent border-2 border-green-500 text-green-500 px-4 py-2 text-xs sm:text-sm rounded-full font-bold hover:bg-green-500/10 transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="relative w-8 h-6 focus:outline-none">
            <motion.span
              initial={{ rotate: 0, y: 0 }}
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 5 : 0,
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-white transform origin-left"
            />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"
            />
            <motion.span
              initial={{ rotate: 0, y: 0 }}
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -5 : 0,
              }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed md:hidden top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 z-60 text-white hover:text-green-500 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
              {[{ href: "/", label: "Home" }, { href: "/novels", label: "Novels" }, { href: "/categories", label: "Categories" }, { href: "/about", label: "About Us" }].map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={index}
                >
                  <Link
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-2xl font-bold text-white hover:text-green-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={menuItemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={4}
                className="flex flex-col space-y-4 w-full max-w-xs"
              >
                <Link
                  href="/login"
                  onClick={toggleMobileMenu}
                  className="w-full text-center border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-500/10 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={toggleMobileMenu}
                  className="w-full text-center border-2 border-green-500 text-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-500/10 transition"
                >
                  Join Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

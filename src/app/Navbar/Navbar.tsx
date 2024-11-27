"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Search, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [isMobileMenuOpen]);

const toggleMobileMenu = () => {
  setMobileMenuOpen(!isMobileMenuOpen);
}



  const categories = [
    "Fantasy",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Horror",
    "Adventure"
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div 
className="text-2xl font-bold text-white transition-all duration-500"
whileHover={{ scale: 1.1, y: -2, color: '#50C878', textShadow: '0 0 10px rgba(80, 200, 120, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              StoryLoft
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Navigation Links */}
            <NavLink href="/" label="Home" active={pathname === "/"} />
            <NavLink href="/novels" label="Novels" active={pathname === "/novels"} />
            
{/* Categories Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1">
                <Link href="/categories">
                  <motion.div
                    className="flex items-center text-white hover:text-green-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Categories</span>
                  </motion.div>
                </Link>
                <motion.div
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
             
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      href={`/categories/${category.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors"
                    >
                      {category}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <NavLink href="/about" label="About" active={pathname === "/about"} />

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-green-400 transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white hover:text-green-400 transition-colors"
              >
                Login
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500/10 transition-all duration-300"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
className="fixed inset-0 bg-black z-40 overflow-y-auto flex flex-col"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2 hover:text-green-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col items-center space-y-6">
{["Home", "Novels", "About"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Categories Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/categories">
                    <motion.div
                      className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ scale: 1.1 }}
                    >
                      Categories
                    </motion.div>
                  </Link>
                </motion.div>

                <div className="pt-6 w-full space-y-4">
                  <Link href="/login" className="block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
className="w-full py-3 border-2 border-blue-500 text-blue-500 rounded-full bg-transparent hover:bg-blue-500/10 transition-all duration-300 text-lg font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link href="/signup" className="block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
className="w-full py-3 border-2 border-green-500 text-green-500 rounded-full bg-transparent hover:bg-green-500/10 transition-all duration-300 text-lg font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// NavLink Component
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href}>
      <motion.div
        className={`relative ${active ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {label}
        {active && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 top-full h-0.5 w-full bg-green-400"
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
      </motion.div>
    </Link>
  );
}

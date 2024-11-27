"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.6, 0.5] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("/bgs.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent z-0" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Card */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Welcome Back
              </h1>
              <p className="text-gray-400 mt-2">Sign in to continue your journey</p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 pl-10
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 pl-10
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300 hover:text-white cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded bg-black/30 border-white/10" />
                  Remember me
                </label>
                <Link 
                  href="#" 
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
className="w-full relative overflow-hidden group border-2 border-green-500 text-green-500 py-3 rounded-full font-semibold bg-transparent transition-all duration-300 transform hover:scale-[1.02] hover:border-white hover:bg-transparent"
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <span className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  Sign In
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
<div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-400 mt-6">
                Don&apos;t have an account?{' '}
                <Link 
                  href="/signup" 
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </form>

            {/* Social Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black/30 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Google', 'GitHub', 'Twitter'].map((provider) => (
                  <motion.button
                    key={provider}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center py-2 px-4 border border-white/10 rounded-lg
                             bg-black/30 hover:bg-black/50 transition-all duration-300"
                  >
                    <span className="sr-only">Sign in with {provider}</span>
                    <img
                      src={`/${provider.toLowerCase()}.svg`}
                      alt={provider}
                      className="w-5 h-5"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Check, X } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password strength indicators
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    number: false,
    special: false,
    capital: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Check password strength when password field changes
    if (name === 'password') {
      setPasswordStrength({
        length: value.length >= 8,
        number: /\d/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        capital: /[A-Z]/.test(value)
      });
    }
  };

  const strengthIndicators = [
    { label: 'At least 8 characters', check: passwordStrength.length },
    { label: 'Contains a number', check: passwordStrength.number },
    { label: 'Contains a special character', check: passwordStrength.special },
    { label: 'Contains a capital letter', check: passwordStrength.capital }
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Background */}
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
      
      {/* Gradient Overlay */}
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
            {/* Header */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Create Account
              </h1>
              <p className="text-gray-400 mt-2">Join our community of readers and writers</p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 pl-10
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-300"
                    placeholder="Choose a username"
                    required
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

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
                    placeholder="Create a password"
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

                {/* Password Strength Indicators */}
                <div className="mt-2 space-y-2">
                  {strengthIndicators.map(({ label, check }) => (
                    <div key={label} className="flex items-center space-x-2 text-sm">
                      {check ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={check ? 'text-green-500' : 'text-gray-400'}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg border border-white/10 pl-10
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-300"
                    placeholder="Confirm your password"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">Passwords do not match</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
className="w-full relative overflow-hidden group border-2 border-green-500 text-green-500 py-3 rounded-full font-semibold bg-transparent transition-all duration-300 transform hover:scale-[1.02] hover:border-white hover:bg-transparent"
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <span className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  Create Account
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
<div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              {/* Login Link */}
              <p className="text-center text-gray-400 mt-6">
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  Sign In
                </Link>
              </p>
            </form>

            {/* Social Signup Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black/30 text-gray-400">Or sign up with</span>
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
                    <span className="sr-only">Sign up with {provider}</span>
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

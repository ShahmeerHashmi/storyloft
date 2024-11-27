"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Star, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Active Readers" },
    { icon: <BookOpen className="w-6 h-6" />, value: "10K+", label: "Stories" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Average Rating" },
    { icon: <Globe className="w-6 h-6" />, value: "100+", label: "Countries" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/book1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Content",
      image: "/book2.jpg"
    },
    {
      name: "Emma Davis",
      role: "Community Manager",
      image: "/book3.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/herobg.jpg"
          alt="Story Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
          >
            About StoryLoft
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            Your premier destination for discovering and enjoying captivating stories from around the world
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 text-center hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-green-400">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl font-bold mb-6 text-green-400"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-lg leading-relaxed mb-8 text-gray-300"
          >
            At StoryLoft, we believe that every story deserves to be told and every voice deserves to be heard. 
            Our mission is to create a vibrant community where readers can explore diverse narratives and connect 
            with stories that resonate with them on a deeper level.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400">What We Offer</h3>
              <ul className="space-y-2">
                {["Curated collection of high-quality novels", "User-friendly reading experience", 
                  "Personalized recommendations", "Community discussions and reviews"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <ArrowRight className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400">Our Values</h3>
              <ul className="space-y-2">
                {["Diversity in storytelling", "Quality over quantity", 
                  "Community engagement", "Continuous innovation"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <ArrowRight className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 text-gray-300">
            Whether you're an avid reader or just starting your reading journey, 
            StoryLoft is the perfect place for you.
          </p>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition duration-300"
            >
              Get Started Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

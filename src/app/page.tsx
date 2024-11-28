"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageSlider from "./ImageSlider/ImageSlider";
import { useRef } from "react";
import { BookOpen, Users, Star, ArrowRight } from "lucide-react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, value: "10K+", label: "Books" },
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Readers" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Rating" },
  ];

  const featuredNovels = [
    { 
      title: "Echoes of Eternity",
      author: "Emma Wordsmith",
      image: "/book1.jpg",
      genre: "Fantasy",
      rating: 4.8
    },
    {
      title: "Quantum Dreams",
      author: "Alex Scienceton",
      image: "/book3.jpg",
      genre: "Sci-Fi",
      rating: 4.9
    },
    {
      title: "Midnight Tales",
      author: "Sarah Mystique",
      image: "/book2.jpg",
      genre: "Mystery",
      rating: 4.7
    }
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={targetRef}
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/herobg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
<motion.div 
  initial={fadeInUp.initial}
  animate={fadeInUp.animate}
  transition={fadeInUp.transition}
  className="text-center max-w-4xl mx-auto"
>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                StoryLoft
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover endless worlds through the power of storytelling
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/novels">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 
                           text-white rounded-full font-bold text-lg
                           hover:from-green-600 hover:to-green-700 
                           transition-all duration-300"
                >
                  Explore Books
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-green-500 text-green-500 
                           rounded-full font-bold text-lg
                           hover:bg-green-500/10 transition-all duration-300"
                >
                  Join Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-green-500 mb-2 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400"
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Trending Section with ImageSlider */}
      <section className="py-20  mt-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
>
          <div className="text-2xl py-28  sm:text-4xl md:text-6xl md:px-80 md:py-24 font-bold absolute left-1/2 transform -translate-x-1/2 sm:left-36 sm:-translate-x-0 -top-12 z-30 tracking-wider text-white [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:2px_white] mix-blend-difference">
            TRENDING NOW
          </div>
          <ImageSlider />
        </motion.div>
      </section>

      {/* Featured Novels */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Novels
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNovels.map((novel, idx) => (
              <motion.div
                key={novel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={novel.image}
                    alt={novel.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{novel.title}</h3>
                  <p className="text-gray-400 mb-2">{novel.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{novel.genre}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-400">{novel.rating}</span>
                    </div>
                  </div>
                  <Link href={`/novels/${idx + 1}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg
                               hover:bg-green-600 transition-colors duration-300"
                    >
                      Read Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Explore Categories
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Fantasy", "Mystery", "Romance", "Sci-Fi", "Horror", "Adventure", "Drama", "Thriller"].map(
              (category, idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Link href={`/categories/${category.toLowerCase()}`}>
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 
                                  border border-gray-800 rounded-xl p-6 text-center
                                  hover:border-green-500/50 transition-all duration-300">
                      <h3 className="text-lg font-semibold group-hover:text-green-500 
                                   transition-colors duration-300">
                        {category}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of book lovers and discover your next favorite story.
          </p>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 
                       text-white rounded-full font-bold text-lg
                       hover:from-green-600 hover:to-green-700 
                       transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

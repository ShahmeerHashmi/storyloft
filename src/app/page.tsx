"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-black sm:h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/herobg.jpg")' }}
      >
        {/* Overlay for reduced opacity */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 sm:mt-28 z-20 p-4 sm:p-6 text-center max-w-[320px] sm:max-w-md mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            Welcome to <span className="text-green-500">StoryLoft</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Explore thousands of novels, find your next favorite read, and dive into captivating stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Link
              href="/novels"
              className="font-bold text-sm sm:text-base md:text-lg bg-transparent border-2 border-green-500 text-green-500 px-6 sm:px-8 py-2 rounded-full hover:bg-green-500/10 transition duration-300"
            >
              Browse Novels
            </Link>
            <Link
              href="/signup"
              className="bg-transparent border-2 border-green-500 text-green-500 px-6 sm:px-8 py-2 text-sm sm:text-base md:text-lg font-bold rounded-full hover:bg-green-500/10 transition duration-300"
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Image Slider Section */}
      <section className="py-8 bg-black relative mt-20 sm:mt-40">
        <div className="container mx-auto px-4">
          <div className="text-3xl sm:text-4xl md:text-7xl font-bold absolute left-1/2 transform -translate-x-1/2 sm:left-36 sm:-translate-x-0 -top-3 z-30 tracking-wider text-white [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:2px_white] mix-blend-difference">
            TRENDING
          </div>
          <ImageSlider />
        </div>
      </section>

     {/* Featured Novels */}
<section className="py-8 sm:py-12">
  <div className="container mx-auto px-3 sm:px-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
      Featured Novels
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {[
        { title: "Novel 1", image: "/book1.jpg" },
        { title: "Novel 3", image: "/book3.jpg" },
        { title: "Novel 2", image: "/book2.jpg" },
      ].map((novel, idx) => (
        <div
          key={idx}
          className="bg-white/10 text-white shadow rounded-lg overflow-hidden"
        >
          <Image
            src={novel.image} // Individual image source
            alt={novel.title}
            width={400}
            height={300}
            className="w-full h-52 sm:h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold">{novel.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              A captivating description of the novel that hooks readers.
            </p>
            <Link
              href={`/novels/${idx + 1}`}
              className="text-green-500 mt-2 inline-block text-sm sm:text-base hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Categories */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
            Explore by Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Romance", "Mystery", "Science Fiction", "Fantasy", "Non-Fiction"].map(
              (category, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 shadow p-3 sm:p-4 rounded-lg text-center hover:bg-white/20 transition"
                >
                  <Link
                    href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm sm:text-lg font-semibold text-white"
                  >
                    {category}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Discover Your Next Adventure?
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Join StoryLoft today and explore the world of captivating stories and
            unforgettable characters.
          </p>
          <Link
            href="/signup"
            className="bg-transparent border-2 border-green-500 text-green-500 px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-500/10 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

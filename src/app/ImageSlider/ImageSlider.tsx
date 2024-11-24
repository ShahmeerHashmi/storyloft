import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  const slides = [
    { 
      id: 1, 
      image: '/book1.jpg', 
      link: '/novels/1', 
      title: 'Echoes of Eternity', 
      author: 'Emma Wordsmith',
      genre: 'Fantasy'
    },
    { 
      id: 2, 
      image: '/book2.jpg', 
      link: '/novels/2', 
      title: 'Quantum Horizon', 
      author: 'Alex Scienceton',
      genre: 'Science Fiction'
    },
    { 
      id: 3, 
      image: '/book3.jpg', 
      link: '/novels/3', 
      title: 'Whispers in the Mist', 
      author: 'Sarah Mystique',
      genre: 'Mystery'
    },
    { 
      id: 4, 
      image: '/book4.jpg', 
      link: '/novels/4', 
      title: 'Heartstrings', 
      author: 'Rachel Romance',
      genre: 'Romance'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, nextSlide]);

  return (
    <motion.div 
      className="relative w-full max-w-[95%] sm:max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="absolute w-full h-full object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">
                      by {slide.author} | {slide.genre}
                    </p>
                    <Link
                      href={slide.link}
                      className="inline-flex items-center gap-2 bg-green-500 text-white 
                                 px-4 py-2 rounded-full hover:bg-green-600 
                                 transition-colors text-sm sm:text-base"
                    >
                      Read Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
                     bg-black/50 p-2 rounded-full z-10 
                     hover:bg-black/70 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
                     bg-black/50 p-2 rounded-full z-10 
                     hover:bg-black/70 transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 
                     bg-black/50 p-2 rounded-full z-10 
                     hover:bg-black/70 transition"
          aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                         ${index === currentSlide ? 'bg-white w-4' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
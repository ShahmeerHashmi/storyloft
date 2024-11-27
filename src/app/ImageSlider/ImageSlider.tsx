import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Star, Clock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ImageSlider: React.FC = () => {
const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  const slides = [
    { 
      id: 'echoes-of-eternity', 
      image: '/book1.jpg',
      title: 'Echoes of Eternity', 
      author: 'Emma Wordsmith',
      genre: 'Fantasy',
      rating: 4.8,
      readTime: '6h 30m',
      description: 'A mesmerizing tale of magic and destiny that unfolds in a world where dreams and reality intertwine...'
    },
    { 
      id: 'quantum-horizon', 
      image: '/book2.jpg',
      title: 'Quantum Horizon', 
      author: 'Alex Scienceton',
      genre: 'Science Fiction',
      rating: 4.9,
      readTime: '8h 15m',
      description: 'Journey through the cosmos in this mind-bending adventure that challenges the laws of physics...'
    },
    { 
      id: 'whispers-in-the-mist', 
      image: '/book3.jpg',
      title: 'Whispers in the Mist', 
      author: 'Sarah Mystique',
      genre: 'Mystery',
      rating: 4.7,
      readTime: '5h 45m',
      description: 'A gripping mystery that follows detective Claire Stone as she unravels a centuries-old secret...'
    },
    { 
      id: 'heartstrings', 
      image: '/book4.jpg',
      title: 'Heartstrings', 
      author: 'Rachel Romance',
      genre: 'Romance',
      rating: 4.6,
      readTime: '4h 20m',
      description: 'A touching love story that proves sometimes the heart knows better than the mind...'
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
      className="relative w-full max-w-[95%] sm:max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
              >
                <div className="absolute inset-0 opacity-80">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="max-w-3xl">
                    <motion.div 
                      className="flex items-center space-x-2 text-green-400 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="px-3 py-1 bg-green-500/10 rounded-full text-sm">
                        {slide.genre}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="ml-1 text-yellow-400">{slide.rating}</span>
                      </div>
                    </motion.div>

                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.title}
                    </motion.h2>

                    <motion.div 
                      className="flex items-center space-x-4 text-gray-300 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {slide.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {slide.readTime}
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-gray-300 mb-6 line-clamp-2 sm:line-clamp-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
<motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          href={`/novels/${slide.id}`}
                          className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 
                                   text-white rounded-full font-semibold
                                   hover:from-green-600 hover:to-green-700 
                                   transition-all duration-300"
                        >
                          <div className="flex items-center space-x-2">
                            <span>Read Now</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <motion.button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm
                     hover:bg-black/50 transition-all duration-300
                     border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm
                     hover:bg-black/50 transition-all duration-300
                     border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 p-2 rounded-full 
                   bg-black/30 backdrop-blur-sm hover:bg-black/50 
                   transition-all duration-300 border border-white/10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
        >
          {isPlaying ? 
            <Pause className="w-5 h-5 text-white" /> : 
            <Play className="w-5 h-5 text-white" />
          }
        </motion.button>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-8 bg-green-500' : 'w-4 bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageSlider;

"use client";
import { Suspense, useState, useEffect } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, User, Clock, Filter, Star, ArrowUp, X } from "lucide-react";

// Loading Skeleton Component
const NovelSkeleton = () => (
  <div className="bg-gray-800/50 rounded-lg p-4 h-[400px] animate-pulse">
    <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-700 rounded w-1/2 mb-4"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-700 rounded w-full"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

export default function NovelsPage() {
  return (
    <Suspense fallback={<NovelSkeletons />}>
      <NovelsContent />
    </Suspense>
  );
}

const NovelSkeletons = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
    {[...Array(10)].map((_, i) => (
      <NovelSkeleton key={i} />
    ))}
  </div>
);

interface Novel {
  id: number;
  image: string;
  link: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  rating: number;
  readTime: string;
}

function NovelsContent() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search")?.toLowerCase() || "";
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedNovel, setSelectedNovel] = useState<Novel | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ... novels data remains the same ...
const novels = useMemo(() => [
    {
      id: 1,
      image: "/book1.jpg",
      link: "/novels/1",
      title: "Echoes of Eternity",
      author: "Emma Wordsmith",
      genre: "Fantasy",
      description: "A mesmerizing tale of magic and destiny that unfolds in a world where dreams and reality intertwine...",
      rating: 4.8,
      readTime: "6 hours"
    },
    {
      id: 2,
      image: "/book3.jpg",
      link: "/novels/2",
      title: "Horror in the Dark",
      author: "James Nightshade",
      genre: "Horror",
      description: "When darkness falls, ancient terrors emerge from the shadows to haunt the living...",
      rating: 4.6,
      readTime: "5 hours"
    },
    {
      id: 3,
      image: "/book2.jpg",
      link: "/novels/3",
      title: "Never Ending Sky",
      author: "Luna Starling",
      genre: "Science Fiction",
      description: "Journey through the cosmos in this epic adventure that challenges the boundaries of space and time...",
      rating: 4.9,
      readTime: "8 hours"
    },
    {
      id: 4,
      image: "/book4.jpg",
      link: "/novels/4",
      title: "Glimmer of Hope",
      author: "Sarah Heart",
      genre: "Romance",
      description: "A touching story of love, loss, and the power of second chances in modern-day New York...",
      rating: 4.7,
      readTime: "4 hours"
    },
    {
      id: 5,
      image: "/book2.jpg",
      link: "/novels/5",
      title: "Quantum Horizon",
      author: "Alex Scienceton",
      genre: "Science Fiction",
      description: "Explore the cutting edge of quantum physics in this thrilling scientific adventure...",
      rating: 4.5,
      readTime: "7 hours"
    },
    {
      id: 6,
      image: "/book3.jpg",
      link: "/novels/6",
      title: "Whispers in the Mist",
      author: "Sarah Mystique",
      genre: "Mystery",
      description: "Follow detective Claire Stone as she unravels a centuries-old mystery in the foggy streets of London...",
      rating: 4.8,
      readTime: "6 hours"
    },
    {
      id: 7,
      image: "/book4.jpg",
      link: "/novels/7",
      title: "Heartstrings",
      author: "Rachel Romance",
      genre: "Romance",
      description: "A heartwarming romance that proves love can bloom in the most unexpected places...",
      rating: 4.6,
      readTime: "5 hours"
    },
  ], []);

  const genres = ["All", ...Array.from(new Set(novels.map(novel => novel.genre)))];

  const filteredNovels = useMemo(() => {
    return novels.filter(novel => {
      const matchesSearch = 
        novel.title.toLowerCase().includes(search) ||
        novel.description.toLowerCase().includes(search) ||
        novel.author.toLowerCase().includes(search);
      
      const matchesGenre = selectedGenre === "All" || novel.genre === selectedGenre;
      
      return matchesSearch && matchesGenre;
    });
}, [search, selectedGenre, novels]);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
{/* Hero Section with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/herobg.jpg"
              alt="Books Background"
              fill
              className="object-cover opacity-30 transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:bg-gradient-to-l transition-all duration-500"
            >
              Discover Your Next Adventure
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto"
            >
              Explore our curated collection of captivating stories
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Filter Section */}
        <div className="container mx-auto px-4 mb-8">
          <motion.button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-all duration-300 transform hover:translate-x-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-5 h-5" />
            <span>Filter by Genre</span>
          </motion.button>
          
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {genres.map((genre) => (
                  <motion.button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${selectedGenre === genre 
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/20' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-700/20'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {genre}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

{/* Enhanced Novels Grid */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-6 px-2 sm:px-0"
        >
          {filteredNovels.map((novel, index) => (
            <motion.div
              key={novel.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden 
                        border border-gray-700 hover:border-green-500/50 
                        transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10
                        flex flex-col"
              onClick={() => setSelectedNovel(novel)}
            >
<div className="relative pt-[100%] sm:pt-[140%] overflow-hidden">
                <Image
                  src={novel.image}
                  alt={novel.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 4}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm line-clamp-3">{novel.description}</p>
                  </div>
                </div>
              </div>

<div className="p-2.5 sm:p-4 flex flex-col min-h-[160px] sm:min-h-[200px]">
                <h3 className="font-bold text-white mb-1.5 sm:mb-2 text-sm sm:text-lg group-hover:text-green-400 transition-colors duration-300 line-clamp-1">
                  {novel.title}
                </h3>
                
<div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="truncate text-sm sm:text-base">{novel.author}</span>
                  </div>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{novel.genre}</span>
                  </div>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{novel.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        i < Math.floor(novel.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-1.5 sm:ml-2 text-sm text-gray-400">{novel.rating}</span>
                </div>

<motion.button
  onClick={() => setSelectedNovel(novel)}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
className="w-full py-1.5 sm:py-2 px-3 sm:px-4 border-2 border-green-500 bg-transparent 
         text-white text-sm sm:text-base rounded-full font-medium transition-all duration-300 
         hover:shadow-lg hover:shadow-green-500d/50"
>
  Read Now
</motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredNovels.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-400 mb-4">
              No novels found
            </h3>
            <p className="text-gray-500 text-lg">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-green-500 text-white rounded-full shadow-lg 
                       hover:bg-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Novel Preview Modal */}
        <AnimatePresence>
          {selectedNovel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedNovel(null)}
            >
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  className="bg-gray-900 rounded-xl p-2 sm:p-4 m-1 sm:m-3 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full relative overflow-y-auto"
  onClick={e => e.stopPropagation()}
>
                <button
                  onClick={() => setSelectedNovel(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors 
                           bg-gray-800/50 rounded-full p-1 hover:bg-gray-700/50 z-10"
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                
<div className="flex flex-col md:flex-row gap-2 sm:gap-4">
<div className="relative w-1/2 md:w-1/4 aspect-[2/3] mx-auto md:mx-0">
  <Image
    src={selectedNovel.image}
    alt={selectedNovel.title}
    fill
    className="object-cover rounded-lg shadow-lg"
  />
</div>

<div className="flex-1 mt-2 md:mt-0">
  <h2 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">{selectedNovel.title}</h2>
  <p className="text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm">by {selectedNovel.author}</p>
  <div className="flex items-center mb-1 sm:mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${
          i < Math.floor(selectedNovel.rating)
            ? 'text-yellow-400'
            : 'text-gray-600'
        }`}
      />
    ))}
    <span className="ml-1 sm:ml-1.5 text-gray-400 text-xs sm:text-sm">{selectedNovel.rating}</span>
  </div>
  <p className="text-gray-300 mb-2 sm:mb-4 text-xs sm:text-sm leading-relaxed">{selectedNovel.description}</p>
  <div className="space-y-1 mb-2 sm:mb-4">
    <div className="flex items-center text-gray-400">
      <BookOpen className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 flex-shrink-0" />
      <span className="text-xs sm:text-sm">{selectedNovel.genre}</span>
    </div>
    <div className="flex items-center text-gray-400">
      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 flex-shrink-0" />
      <span className="text-xs sm:text-sm">{selectedNovel.readTime}</span>
    </div>
  </div>
                    
                    <Link href={selectedNovel.link}>
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
className="w-full py-2.5 sm:py-3 px-4 sm:px-6 border-2 border-green-500 bg-transparent 
         text-white text-sm sm:text-base rounded-full font-medium transition-all duration-300 
         hover:shadow-lg hover:shadow-green-500/50"
>
  Start Reading
</motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
    </MotionConfig>);
}
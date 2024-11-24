"use client";
import { Suspense } from "react";
import { motion, MotionConfig } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NovelsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NovelsContent />
    </Suspense>
  );
}

function NovelsContent() {
  const searchParams = useSearchParams(); // Get dynamic query params
  const search = searchParams?.get("search")?.toLowerCase() || ""; // Extract and normalize 'search'

  // Define the novels data directly in this component
  const novels = [
    {
      id: 1,
      image: "/book1.jpg",
      link: "/novels/1",
      title: "Echoes of Eternity",
      author: "Emma Wordsmith",
      genre: "Fantasy",
      description: "A fantasy novel about...",
    },
    {
      id: 2,
      image: "/book3.jpg",
      link: "/novels/1",
      title: "Horror in the Dark",
      author: "Emma Wordsmith",
      genre: "Fantasy",
      description: "A fantasy novel about...",
    },
    {
      id: 3,
      image: "/book2.jpg",
      link: "/novels/1",
      title: "Never Ending Sky",
      author: "Emma Wordsmith",
      genre: "Fantasy",
      description: "A fantasy novel about...",
    },
    {
      id: 4,
      image: "/book4.jpg",
      link: "/novels/1",
      title: "Glimmer of Hope",
      author: "Emma Wordsmith",
      genre: "Fantasy",
      description: "A fantasy novel about...",
    },
    {
      id: 5,
      image: "/book2.jpg",
      link: "/novels/2",
      title: "Quantum Horizon",
      author: "Alex Scienceton",
      genre: "Science Fiction",
      description: "A science fiction novel about...",
    },
    {
      id: 6,
      image: "/book3.jpg",
      link: "/novels/3",
      title: "Whispers in the Mist",
      author: "Sarah Mystique",
      genre: "Mystery",
      description: "A mystery novel about...",
    },
    {
      id: 6,
      image: "/book4.jpg",
      link: "/novels/4",
      title: "Heartstrings",
      author: "Rachel Romance",
      genre: "Romance",
      description: "A romantic novel about...",
    },
  ];

  // Memoize filtered novels to avoid unnecessary re-renders
  const filteredNovels = useMemo(
    () =>
      novels.filter(
        (novel) =>
          novel.title.toLowerCase().includes(search) ||
          novel.description.toLowerCase().includes(search)
      ),
    [search]
  );

  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <main
        className="pt-16 sm:pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-black to-gray-900 
                       pb-16 sm:pb-20 md:pb-24"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-500 px-4">
          Novels
        </h1>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
                          gap-3 sm:gap-4 md:gap-5 lg:gap-6"
          >
            {filteredNovels.map((novel) => (
              <motion.div
                key={novel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.035,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden 
                            border border-white/20 hover:border-green-500/50 
                            flex flex-col relative"
              >
                <div className="aspect-[2/3] relative overflow-hidden">
                  <motion.div className="relative w-full h-full">
                    <Image
                      src={novel.image}
                      alt={novel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover"
                      style={{
                        transform: "scale(1)",
                        transition: "transform 0.2s",
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/fallback.jpg"; // Fallback image
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  />
                </div>

                <div className="p-2 sm:p-3 flex flex-col flex-grow">
                  <div className="mb-1">
                    <h3 className="text-sm font-bold text-white mb-1 tracking-tight line-clamp-2">
                      {novel.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2">
                      {novel.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link href={novel.link}>
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(16, 185, 129, 0.1)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full border border-green-500 text-green-500 
                                   font-semibold py-1.5 px-2 rounded-lg 
                                   text-xs transition-colors duration-200
                                   focus:outline-none focus:ring-2 focus:ring-green-300
                                   hover:bg-green-500 hover:text-white
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label={`Read ${novel.title}`}
                      >
                        Read Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNovels.length === 0 && (
            <div className="text-center text-gray-400 mt-4">
              <p>No novels found for your search.</p>
            </div>
          )}
        </div>
      </main>
    </MotionConfig>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Star, Clock, BookMarked, Settings, List } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      if (router) {
        router.push("/");
      }
    }
  }, [isSignedIn, router]);

  const readingStats = [
    { icon: <BookOpen className="w-6 h-6" />, value: "12", label: "Books Read" },
    { icon: <Clock className="w-6 h-6" />, value: "48h", label: "Reading Time" },
    { icon: <Star className="w-6 h-6" />, value: "4.5", label: "Avg Rating" },
  ];

  const currentlyReading = [
    {
      title: "The Shadow's Edge",
      author: "Maya Rivers",
      progress: 65,
      image: "/book1.jpg",
      lastRead: "2 hours ago"
    },
    {
      title: "Stellar Odyssey",
      author: "James Newton",
      progress: 30,
      image: "/book2.jpg",
      lastRead: "Yesterday"
    }
  ];

  const recentlyAdded = [
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
    <main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen mt-20">
      {/* Header Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={user?.imageUrl || "/default-avatar.png"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold">Welcome back, {user?.firstName || "Reader"}!</h1>
                <p className="text-gray-400">Continue your reading journey</p>
              </div>
            </div>
            <Link href="/settings">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-gray-800 transition duration-300"
              >
                <Settings className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            {readingStats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-800/30 rounded-xl p-4 text-center transition duration-300 hover:bg-gray-800"
              >
                <div className="text-green-500 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Currently Reading Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Currently Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentlyReading.map((book, idx) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-gray-800/30 rounded-xl p-4 transition duration-300 hover:bg-gray-800"
              >
                <div className="flex gap-4">
                  <div className="relative w-24 h-36">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{book.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{book.author}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                    <p className="text-gray-400 text-sm">{book.progress}% complete</p>
                    <p className="text-gray-400 text-sm">Last read {book.lastRead}</p>
                    <Link href={`/read/${book.title}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg
                                 hover:bg-green-600 transition-colors duration-300"
                      >
                        Continue Reading
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[ 
              { icon: <List className="w-6 h-6" />, label: "Reading List", href: "/reading-list" },
              { icon: <BookMarked className="w-6 h-6" />, label: "Bookmarks", href: "/bookmarks" },
              { icon: <Star className="w-6 h-6" />, label: "Reviews", href: "/reviews" },
              { icon: <BookOpen className="w-6 h-6" />, label: "Browse Books", href: "/novels" }
            ].map((action, idx) => (
              <Link key={action.label} href={action.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 rounded-xl p-4 text-center cursor-pointer
                           hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <div className="text-green-500 mb-2 flex justify-center">
                    {action.icon}
                  </div>
                  <p className="text-sm">{action.label}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Recently Added to Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyAdded.map((book, idx) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-gray-800/30 rounded-xl overflow-hidden transition duration-300 hover:bg-gray-800"
              >
                <div className="relative h-48">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{book.title}</h3>
                  <p className="text-gray-400 text-sm">{book.author}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-400">{book.genre}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{book.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

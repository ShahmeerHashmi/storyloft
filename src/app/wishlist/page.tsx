"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Trash2, BookOpen, Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function Wishlist() {
  const { user } = useUser();

  // Example wishlist data - in a real app, this would come from your database
  const wishlistItems = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      image: "/book1.jpg",
      genre: "Fiction",
      addedDate: "2024-03-15",
      price: "$14.99"
    },
    {
      id: 2,
      title: "Project Hail Mary",
      author: "Andy Weir",
      image: "/book2.jpg",
      genre: "Sci-Fi",
      addedDate: "2024-03-14",
      price: "$16.99"
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen mt-20">
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
            <p className="text-gray-400">Keep track of books you want to read</p>
          </motion.div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add New Book Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 rounded-xl p-6 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center cursor-pointer"
            >
              <Plus className="w-12 h-12 text-green-500 mb-3" />
              <p className="text-gray-400">Add to Wishlist</p>
            </motion.div>

            {/* Wishlist Items */}
            {wishlistItems.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/30 rounded-xl overflow-hidden"
              >
                <div className="relative h-48 group">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-red-500 rounded-full mr-2"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-green-500 rounded-full"
                      title="Add to library"
                    >
                      <BookOpen className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{book.title}</h3>
                      <p className="text-gray-400 text-sm">{book.author}</p>
                    </div>
                    <span className="text-green-500 font-semibold">{book.price}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-400">{book.genre}</span>
                    <span className="text-sm text-gray-400">Added {book.addedDate}</span>
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
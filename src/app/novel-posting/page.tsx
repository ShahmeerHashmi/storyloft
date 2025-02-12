"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Publish() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    genre: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/submitNovel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Novel submitted successfully!');
        setFormData({ title: '', author: '', content: '', genre: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to submit novel.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-md  mt-20 p-6 bg-black rounded-lg shadow-2xl">
        {successMessage && (
          <motion.p 
            variants={itemVariants}
            className="text-green-400 text-center mb-4"
          >
            {successMessage}
          </motion.p>
        )}
        {errorMessage && (
          <motion.p 
            variants={itemVariants}
            className="text-red-500 text-center mb-4"
          >
            {errorMessage}
          </motion.p>
        )}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-green-300 text-center mb-6"
        >
          Post a New Novel
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="space-y-4"
        >
          <motion.input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-900 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            whileFocus={{ scale: 1.02 }}
            variants={itemVariants}
          />
          <motion.input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-900 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            whileFocus={{ scale: 1.02 }}
            variants={itemVariants}
          />
          <motion.textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
            className="w-full p-3 rounded bg-gray-900 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            whileFocus={{ scale: 1.02 }}
            variants={itemVariants}
          />
          <motion.div variants={itemVariants}>
            <label htmlFor="genre" className="block text-green-300 mb-1">
              Genre
            </label>
            <motion.select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-green-300 bg-gray-900 text-green-300 appearance-none focus:outline-none focus:ring-2 focus:ring-green-300"
              whileFocus={{ scale: 1.02 }}
            >
              <option value="">Select Genre</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Science Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
              <option value="Historical">Historical</option>
            </motion.select>
          </motion.div>
          <motion.button 
            type="submit" 
            disabled={isLoading}
            className="w-full p-3 rounded-full bg-gradient-to-r from-green-300 to-blue-500 text-black font-bold hover:from-green-400 hover:to-blue-600 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
          >
            {isLoading ? 'Submitting...' : 'Submit Novel'}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

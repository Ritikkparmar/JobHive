import { motion } from "framer-motion";

export default function CareerCraftShowcase() {
  return (
    <div className="w-full px-6 py-16 rounded-2xl shadow-xl bg-white text-gray-900">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        “Craft Your Career Story with AI 🚀”
      </motion.h2>

      <p className="text-center text-lg sm:text-xl mb-10 max-w-3xl mx-auto text-gray-700">
        Dive into <span className="font-semibold text-black">SensAI</span> — a smart platform where users can 
        build stunning <span className="text-purple-600 font-medium">Resumes</span>, 
        create compelling <span className="text-green-600 font-medium">Cover Letters</span>,
        explore interactive <span className="text-pink-500 font-medium">career roadmaps</span>, 
        and get guided by an <span className="text-blue-600 font-medium">Mock Interview </span> tailored to their goals.
      </p>

      <div className="flex justify-center">
        <a
          href="https://sensaicareercoach.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105"
        >
          🌟 Visit Live Project
        </a>
      </div>
    </div>
  );
}

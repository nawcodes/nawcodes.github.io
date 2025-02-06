"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-background">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary-700 mb-6">
            Hi, I'm <span className="text-primary-600">John Doe</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-secondary-500 mb-6">
            Senior Software Engineer
          </h2>
          <p className="text-lg text-secondary-500 mb-8">
            Specializing in building exceptional web applications with modern
            technologies. 5+ years of experience in creating scalable solutions.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition">
              Download CV
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition">
              Contact Me
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 relative"
        >
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/your-photo.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

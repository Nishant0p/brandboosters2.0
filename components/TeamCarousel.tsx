"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const founders = [
  {
    id: 1,
    name: 'Ihor Hulyahrodskyy',
    role: 'Founder and CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Visionary leader with expertise in business strategy and innovation.'
  },
  {
    id: 2,
    name: 'Om Parab',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Tech enthusiast with a passion for building scalable solutions.'
  },
  {
    id: 3,
    name: 'Pruthul Patel',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Creative mind with expertise in design and user experience.'
  },
  {
    id: 4,
    name: 'Atharva Salunkhe',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Marketing strategist with a focus on growth and brand development.'
  }
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + founders.length) % founders.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Founders</h2>
      
      <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
          <div className="absolute top-4 right-4 z-10 bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {founders.length}
          </div>
        <AnimatePresence mode="wait">
          {founders.map((founder, index) => (
            currentIndex === index && (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-primary text-lg font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600">{founder.description}</p>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg z-10 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg z-10 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {founders.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

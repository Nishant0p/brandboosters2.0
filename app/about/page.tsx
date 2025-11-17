'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import WaveAnimation from './components/WaveAnimation';
import OnboardingStep from './components/OnboardingStep';

const onboardingSteps = [
  {
    title: 'Discovery Call',
    description: 'We start with a 30-minute discovery call to understand your business goals, challenges, and vision for the project.'
  },
  {
    title: 'Strategy Session',
    description: 'Our team will create a customized strategy tailored to your specific needs and business objectives.'
  },
  {
    title: 'Implementation',
    description: 'We bring your project to life with our expert team handling all aspects of development and design.'
  },
  {
    title: 'Launch & Support',
    description: 'We ensure a smooth launch and provide ongoing support to help your business grow.'
  }
];

import dynamic from 'next/dynamic';

const TeamCarousel = dynamic(() => import('@/components/TeamCarousel'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
});

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re a team of passionate creators and strategists dedicated to helping businesses thrive in the digital world.
            </p>
          </motion.div>
        </div>
        <WaveAnimation />
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Onboarding Process</h2>
            <p className="text-gray-600">A seamless journey from concept to launch</p>
          </motion.div>

          <div className="relative">
            {onboardingSteps.map((step, index) => (
              <OnboardingStep
                key={step.title}
                title={step.title}
                description={step.description}
                number={index + 1}
                isLast={index === onboardingSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              The talented people behind our success
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <TeamCarousel />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to start your project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Get in touch with us today and let&apos;s create something amazing together.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-block px-8 py-4 bg-white text-black rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </div>
  );
}

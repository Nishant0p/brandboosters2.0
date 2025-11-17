'use client';

import { motion } from 'framer-motion';

type OnboardingStepProps = {
  title: string;
  description: string;
  number: number;
  isLast?: boolean;
};

export default function OnboardingStep({ title, description, number, isLast = false }: OnboardingStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.6 }}
      className="relative py-12 px-6 group"
    >
      <div className="relative z-10">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold mr-6">
            {number}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gray-200" />
      )}
    </motion.div>
  );
}

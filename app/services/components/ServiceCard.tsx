'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
  href: string;
};

export default function ServiceCard({ title, description, index, href }: ServiceCardProps) {
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} className="block">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="border-b border-gray-200 py-8 group hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
        onClick={handleClick}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h3 className="text-4xl md:text-6xl font-medium mb-4 md:mb-0 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl">
              {description}
            </p>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

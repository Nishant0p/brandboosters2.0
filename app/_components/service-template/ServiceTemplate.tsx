"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LiquidBlob = ({ className = '' }) => (
  <div className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob ${className}`}></div>
);

interface ServiceTemplateProps {
  title: string;
  description: string;
  services: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
}

export default function ServiceTemplate({ 
  title, 
  description, 
  services, 
  benefits, 
  icon,
  color 
}: ServiceTemplateProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <LiquidBlob className={`w-[600px] h-[600px] ${color} -top-40 -left-40`} />
        <LiquidBlob className={`w-[700px] h-[700px] ${color} top-1/2 -right-40 -translate-y-1/2 animation-delay-2000`} />
        <LiquidBlob className={`w-[500px] h-[500px] ${color} -bottom-40 left-1/4 animation-delay-4000`} />
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-white/0 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/10"></div>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="max-w-6xl mx-auto relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('/[0-9]', '')} bg-opacity-20`}>
                {icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
            </div>
            <motion.ul className="space-y-3" variants={staggerContainer}>
              {services.map((service, index) => (
                <motion.li 
                  key={index} 
                  variants={fadeIn}
                  className="flex items-start group"
                >
                  <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 mt-0.5 ${color.replace('bg-', 'bg-').replace('/[0-9]', '')} bg-opacity-20 text-primary rounded-full flex-shrink-0 group-hover:bg-opacity-30 transition-colors`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{service}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Why Choose Us</h3>
              <motion.ul className="space-y-4" variants={staggerContainer}>
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    variants={fadeIn}
                    className="flex items-start group"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-green-100 text-green-600 rounded-full flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <motion.div 
              variants={fadeIn}
              className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-2xl group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white p-6 sm:p-8 rounded-xl h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started</h3>
                <p className="text-gray-600 mb-6">Ready to boost your {title.toLowerCase()}? Let&apos;s create something amazing together.</p>
                <button 
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  Get a Free Quote
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Contact Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => router.push('/contact')}
            className="fixed right-6 bottom-6 z-50 flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Contact Now</span>
            <span className="absolute -right-1 -top-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes blob {
          0% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: translate(0px, 0px) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          20% { 
            border-radius: 40% 60% 50% 50% / 60% 40% 60% 40%;
            transform: translate(50px, -30px) scale(1.1) rotate(10deg);
            opacity: 0.9;
          }
          40% { 
            border-radius: 50% 50% 40% 60% / 40% 70% 30% 60%;
            transform: translate(-40px, 30px) scale(1.2) rotate(-15deg);
            opacity: 0.7;
          }
          60% { 
            border-radius: 70% 40% 60% 40% / 50% 60% 40% 50%;
            transform: translate(30px, 40px) scale(0.9) rotate(20deg);
            opacity: 0.8;
          }
          80% { 
            border-radius: 40% 70% 50% 60% / 60% 50% 50% 40%;
            transform: translate(-30px, -40px) scale(1.1) rotate(-10deg);
            opacity: 0.9;
          }
          100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: translate(0px, 0px) scale(1) rotate(0deg);
            opacity: 0.8;
          }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
          filter: saturate(1.2);
          mix-blend-mode: multiply;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}

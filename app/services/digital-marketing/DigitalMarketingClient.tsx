"use client";

import { Target, BarChart2, Users, Zap, MessageSquare, TrendingUp } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DigitalMarketingClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="https://images.prismic.io/alphas/aRlpsbpReVYa4hDf_digitalmarketing.png?auto=format,compress"
          alt="Digital Marketing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Digital Marketing Services
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Digital Marketing"
          description="Drive growth and maximize your online presence with our comprehensive digital marketing strategies tailored to your business goals."
          services={[
            "Search Engine Marketing (SEM)",
            "Social Media Marketing",
            "Content Marketing",
            "Email Marketing",
            "Marketing Automation",
            "Analytics & Reporting"
          ]}
          benefits={[
            "Targeted audience reach",
            "Data-driven strategies",
            "Increased brand visibility",
            "Higher conversion rates",
            "ROI-focused campaigns",
            "Performance tracking"
          ]}
          icon={<TrendingUp className="w-6 h-6 text-primary" />}
          color="bg-orange-400"
        />
      </div>
    </div>
  );
}

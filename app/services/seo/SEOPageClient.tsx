"use client";

import { Search } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SEOPageClient() {
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
          src="https://images.prismic.io/alphas/aRmCK7pReVYa4hFM_seo.png?auto=format,compress"
          alt="SEO Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            SEO Services
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="SEO Services"
          description="Improve your website's visibility and drive organic traffic with our comprehensive SEO services designed to boost your search engine rankings."
          services={[
            "Keyword Research & Analysis",
            "On-Page SEO Optimization",
            "Technical SEO Audit",
            "Content Optimization",
            "Link Building Strategy",
            "Local SEO & Google My Business"
          ]}
          benefits={[
            "Higher search engine rankings",
            "Increased organic traffic",
            "Better user experience",
            "Long-term results",
            "Data-driven strategies",
            "Monthly performance reports"
          ]}
          icon={<Search className="w-6 h-6 text-primary" />}
          color="bg-purple-400"
        />
      </div>
    </div>
  );
}

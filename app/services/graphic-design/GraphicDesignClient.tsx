"use client";

import { Palette, Layers, PenTool, Type, Image as ImageIcon, Zap } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GraphicDesignClient() {
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
          alt="Graphic Design Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Graphic Design
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Graphic Design"
          description="Elevate your brand with stunning visual designs that capture attention and communicate your message effectively. Our creative team delivers custom designs that make an impact."
          services={[
            "Logo & Brand Identity",
            "Print Design (Brochures, Flyers, Business Cards)",
            "Digital Graphics (Social Media, Banners, Ads)",
            "UI/UX Design",
            "Packaging Design",
            "Illustrations & Icons"
          ]}
          benefits={[
            "Professional and polished visuals",
            "Consistent brand identity",
            "High-quality, scalable designs",
            "Quick turnaround times",
            "Custom illustrations",
            "Print and digital ready"
          ]}
          icon={<Palette className="w-6 h-6 text-primary" />}
          color="bg-pink-400"
        />
      </div>
    </div>
  );
}

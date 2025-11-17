"use client";

import { Video, Film, Camera, Edit3, PlayCircle, Zap } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function VideoEditingClient() {
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
          src="https://images.prismic.io/alphas/aRmBPbpReVYa4hFH_ABS2GSlZnuPSkjx2Yq7hVYPWL7_hbWhxKqZPzm-vqFioZF8Jk831waEiDPAIom5Mvk2dll4KXMe43mh6WDmArh6FhpksdJXgFAlvbPn6ugWo_nytpN61mDdtYtF-MzxEj66axXfP-vQS7eLtlOPnATNkSn-l5RT4rpj5FcBE4WCgFYcy3FkQs1024-rj.webp?auto=format,compress"
          alt="Video Editing Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Video Editing
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Video Editing"
          description="Transform your raw footage into compelling visual stories with our professional video editing services. We bring your vision to life with creative storytelling and technical expertise."
          services={[
            "Professional Video Editing",
            "Color Grading & Correction",
            "Motion Graphics & Animation",
            "Audio Enhancement & Mixing",
            "Special Effects (VFX)",
            "Social Media Optimization"
          ]}
          benefits={[
            "High-quality production value",
            "Faster turnaround times",
            "Engaging storytelling",
            "Platform-optimized content",
            "Professional polish",
            "Brand consistency"
          ]}
          icon={<Film className="w-6 h-6 text-primary" />}
          color="bg-purple-400"
        />
      </div>
    </div>
  );
}

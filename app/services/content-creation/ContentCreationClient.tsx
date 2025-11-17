"use client";

import { PenSquare, Camera, Video, Mic, Layout, Zap } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ContentCreationClient() {
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
          alt="Content Creation Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Content Creation
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Content Creation"
          description="Engage your audience with high-quality, relevant content that tells your brand's story and drives meaningful interactions. Our content creation services are designed to captivate and convert."
          services={[
            "Blog Writing & Articles",
            "Social Media Content",
            "Video Content Production",
            "Podcast Production",
            "Email Marketing Content",
            "Whitepapers & E-books"
          ]}
          benefits={[
            "Consistent brand voice",
            "SEO-optimized content",
            "Engaging multimedia content",
            "Strategic content planning",
            "Audience-focused approach",
            "Measurable results"
          ]}
          icon={<PenSquare className="w-6 h-6 text-primary" />}
          color="bg-yellow-400"
        />
      </div>
    </div>
  );
}

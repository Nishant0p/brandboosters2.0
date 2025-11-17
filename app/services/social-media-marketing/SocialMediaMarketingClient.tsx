"use client";

import { Share2 } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SocialMediaMarketingClient() {
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
          src="https://images.prismic.io/alphas/aRmCdLpReVYa4hFO_ABS2GSkbo9YRJXIRalZ44TX2iOlWyZQFjI7COETWOYPUJkikC8ke1fi90IPb975TrQof9FkYAjad-f1SSJxZASQAqg_EXnmX_qcr2Fk33NmtBILEZrho9jf67HGbV1WN43YUP-GPTrOpfRJtDEkEUaFaJejRS3wa9XFrmEIboepamwbiwBddrws1024-rj.webp?auto=format,compress"
          alt="Social Media Marketing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Social Media Marketing
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Social Media Marketing"
          description="Grow your brand's online presence and engage with your audience through strategic social media marketing campaigns across all major platforms."
          services={[
            "Social Media Strategy Development",
            "Content Creation & Curation",
            "Community Management",
            "Paid Social Advertising",
            "Influencer Partnerships",
            "Analytics & Performance Tracking"
          ]}
          benefits={[
            "Increased brand awareness",
            "Higher engagement rates",
            "Targeted audience reach",
            "Improved customer loyalty",
            "Competitive analysis",
            "Measurable ROI"
          ]}
          icon={<Share2 className="w-6 h-6 text-primary" />}
          color="bg-blue-400"
        />
      </div>
    </div>
  );
}

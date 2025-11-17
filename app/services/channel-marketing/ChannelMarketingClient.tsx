"use client";

import { Share2 } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ChannelMarketingClient() {
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
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Channel Marketing Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Channel Marketing
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Channel Marketing"
          description="Maximize your market reach and sales potential through strategic channel marketing. We help you build and optimize distribution channels to expand your brand's presence and drive sustainable growth."
          services={[
            "Channel Partner Strategy & Development",
            "Reseller & Distributor Programs",
            "Co-Marketing Campaigns",
            "Partner Portal Development",
            "Incentive & Loyalty Programs",
            "Performance Analytics & Optimization"
          ]}
          benefits={[
            "Expanded market reach and penetration",
            "Increased sales through strategic partnerships",
            "Stronger, more profitable channel relationships",
            "Consistent brand messaging across all channels",
            "Data-driven insights for continuous improvement",
            "Improved ROI on marketing and partnership investments"
          ]}
          icon={<Share2 className="w-6 h-6 text-primary" />}
          color="bg-indigo-400"
        />
      </div>
    </div>
  );
}

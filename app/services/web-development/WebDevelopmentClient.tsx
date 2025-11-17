"use client";

import { Code } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function WebDevelopmentClient() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

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
          alt="Web Development Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Web Development
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Web Development"
          description="Transform your online presence with our custom web development services. We build fast, responsive, and scalable websites and web applications that deliver exceptional user experiences."
          services={[
            "Custom Website Development",
            "E-commerce Solutions",
            "Progressive Web Apps (PWA)",
            "API Development & Integration",
            "Website Maintenance & Support",
            "Performance Optimization"
          ]}
          benefits={[
            "Mobile-first responsive design",
            "SEO-friendly architecture",
            "Fast loading times",
            "Secure and scalable solutions",
            "Cross-browser compatibility",
            "Ongoing support and maintenance"
          ]}
          icon={<Code className="w-6 h-6 text-primary" />}
          color="bg-blue-400"
        />
      </div>
    </div>
  );
}

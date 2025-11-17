"use client";

import { ShoppingCart, Package, CreditCard, BarChart2, Shield, Zap } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function EcommerceClient() {
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
          alt="E-commerce Solutions"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            E-commerce Solutions
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="E-commerce Solutions"
          description="Transform your online store with our comprehensive e-commerce solutions designed to increase sales and enhance customer experience."
          services={[
            "E-commerce Website Development",
            "Shopping Cart Integration",
            "Payment Gateway Setup",
            "Product Catalog Management",
            "Mobile-Responsive Design",
            "Performance Optimization"
          ]}
          benefits={[
            "Increased online sales",
            "Seamless checkout experience",
            "Secure payment processing",
            "Mobile-friendly shopping",
            "Inventory management",
            "Analytics and reporting"
          ]}
          icon={<ShoppingCart className="w-6 h-6 text-primary" />}
          color="bg-green-400"
        />
      </div>
    </div>
  );
}

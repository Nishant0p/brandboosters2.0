"use client";

import { BarChart2, Database, PieChart, LineChart, TrendingUp, Cpu } from "lucide-react";
import ServiceTemplate from "@/app/_components/service-template/ServiceTemplate";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DataAnalysisClient() {
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
          alt="Data Analysis Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Data Analysis
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ServiceTemplate
          title="Data Analysis"
          description="Transform your raw data into actionable insights with our comprehensive data analysis services. We help businesses make data-driven decisions that drive growth and efficiency."
          services={[
            "Business Intelligence & Analytics",
            "Data Visualization & Reporting",
            "Predictive Analytics & Modeling",
            "Data Mining & Pattern Recognition",
            "Performance Metrics & KPI Tracking",
            "Custom Dashboard Development"
          ]}
          benefits={[
            "Data-driven decision making",
            "Improved operational efficiency",
            "Identify trends and opportunities",
            "Enhanced business intelligence",
            "Customized reporting solutions",
            "Competitive market insights"
          ]}
          icon={<BarChart2 className="w-6 h-6 text-primary" />}
          color="bg-purple-400"
        />
      </div>
    </div>
  );
}

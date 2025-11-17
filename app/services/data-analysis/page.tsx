import { Metadata } from "next";
import dynamic from 'next/dynamic';

const DataAnalysisClient = dynamic(
  () => import('./DataAnalysisClient'),
  { 
    ssr: true,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
);

export const metadata: Metadata = {
  title: "Data Analysis Services | BrandBoosters",
  description: "Unlock the power of your data with our comprehensive data analysis services. We transform raw data into actionable insights to drive your business forward.",
};

export default function DataAnalysisPage() {
  return <DataAnalysisClient />;
}

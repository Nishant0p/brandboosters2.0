import { Metadata } from "next";
import dynamic from 'next/dynamic';

const DigitalMarketingClient = dynamic(
  () => import('./DigitalMarketingClient'),
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
  title: "Digital Marketing Services | BrandBoosters",
  description: "Comprehensive digital marketing solutions to grow your online presence and drive business growth.",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}

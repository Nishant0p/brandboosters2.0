import { Metadata } from "next";
import dynamic from 'next/dynamic';

const EcommerceClient = dynamic(
  () => import('./EcommerceClient'),
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
  title: "E-commerce Solutions | BrandBoosters",
  description: "Transform your online store with our comprehensive e-commerce solutions designed to increase sales and enhance customer experience.",
};

export default function EcommercePage() {
  return <EcommerceClient />;
}

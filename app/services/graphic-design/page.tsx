import { Metadata } from "next";
import dynamic from 'next/dynamic';

const GraphicDesignClient = dynamic(
  () => import('./GraphicDesignClient'),
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
  title: "Graphic Design Services | BrandBoosters",
  description: "Professional graphic design services to elevate your brand with stunning visuals that capture attention and communicate your message effectively.",
};

export default function GraphicDesignPage() {
  return <GraphicDesignClient />;
}

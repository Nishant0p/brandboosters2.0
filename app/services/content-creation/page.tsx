import { Metadata } from "next";
import dynamic from 'next/dynamic';

const ContentCreationClient = dynamic(
  () => import('./ContentCreationClient'),
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
  title: "Content Creation Services | BrandBoosters",
  description: "Professional content creation services to engage your audience with high-quality, relevant content that tells your brand's story and drives meaningful interactions.",
};

export default function ContentCreationPage() {
  return <ContentCreationClient />;
}

import { Metadata } from "next";
import dynamic from 'next/dynamic';

const SocialMediaMarketingClient = dynamic(
  () => import('./SocialMediaMarketingClient'),
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
  title: "Social Media Marketing | BrandBoosters",
  description: "Professional social media marketing services to grow your brand's online presence and engage with your audience.",
};

export default function SocialMediaMarketingPage() {
  return <SocialMediaMarketingClient />;
}

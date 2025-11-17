import { Metadata } from "next";
import dynamic from 'next/dynamic';

const ChannelMarketingClient = dynamic(
  () => import('./ChannelMarketingClient'),
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
  title: "Channel Marketing Services | BrandBoosters",
  description: "Maximize your market reach and sales potential through strategic channel marketing. We help you build and optimize distribution channels to expand your brand's presence.",
};

export default function ChannelMarketingPage() {
  return <ChannelMarketingClient />;
}

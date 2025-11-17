import { Metadata } from "next";
import dynamic from 'next/dynamic';

const VideoEditingClient = dynamic(
  () => import('./VideoEditingClient'),
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
  title: "Video Editing Services | BrandBoosters",
  description: "Professional video editing services to transform your raw footage into compelling visual stories that engage and convert your audience.",
};

export default function VideoEditingPage() {
  return <VideoEditingClient />;
}

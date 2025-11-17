// app/services/seo/page.tsx
import { Metadata } from "next";
import dynamic from 'next/dynamic';

const SEOPageClient = dynamic(() => import('./SEOPageClient'), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "SEO Services | BrandBoosters",
  description: "Professional SEO services to improve your website's visibility and drive organic traffic to your business.",
};

export default function SEOPage() {
  return <SEOPageClient />;
}
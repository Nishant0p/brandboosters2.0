/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pin.it',
      },
    ],
    // Disable Next.js built-in image optimization for remote images in dev
    // This prevents the dev server from attempting to fetch/optimize remote
    // images (and failing with network/connect timeouts). For production
    // builds you should allow remotePatterns and/or host these images
    // locally in `/public`.
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/case',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/case/:path*',
        destination: '/services/seo/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

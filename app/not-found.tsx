'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect to home after 10 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-90"
        >
          <source src="https://alphas.cdn.prismic.io/alphas/aRmN27pReVYa4hFz_LOOP_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 md:text-8xl">404</h1>
        <h2 className="mb-6 text-2xl font-medium text-gray-700 md:text-3xl">
          Oops! Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-gray-600 md:text-lg">
          The page you're looking for doesn't exist or has been moved.
          You'll be redirected to the homepage shortly.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Return Home
          </Link>
          <button 
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Go Back
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform text-sm text-gray-500">
          Redirecting in <span className="font-semibold">10</span> seconds...
        </div>
      </div>
    </div>
  );
}

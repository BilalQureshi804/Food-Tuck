'use client';

import Link from "next/link";
import PageHeader from './components/PageHeader';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with PageHeader component */}
      <PageHeader 
        title="404 Error" 
        currentPage="404"
      />

      {/* Error Content Section */}
      <section className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Large 404 Number */}
          <h3 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#FF9F0D] mb-8">
            404
          </h3>

          {/* Error Message */}
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              Oops! Looks like something went wrong
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Page cannot be found We&apos;ll have it figured out in no time.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Meanwhile, check out these fresh ideas:
            </p>
          </div>

          {/* Back to Home Button */}
          <Link href="/" className="inline-block">
            <button className="bg-[#FF9F0D] text-white text-lg font-bold px-8 py-3 rounded-md hover:bg-[#e8890b] transition-colors duration-300 shadow-md hover:shadow-lg">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
} 
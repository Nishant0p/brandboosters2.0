import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full padding-y">
      <div className="w-full padding-x">
        <div className="w-full flex flex-col gap-y-[100px]">
          {/* Keyword Research */}
          <div className="w-full flex justify-between items-center gap-[50px] lg:flex-col lg:items-start">
            <div className="w-[50%] lg:w-full">
              <h2 className="text-[40px] leading-[45px] font-FoundersGrotesk font-medium text-secondry">
                Keyword Research
              </h2>
            </div>
            <div className="w-[50%] lg:w-full">
              <p className="paragraph text-secondry mb-[30px]">
                We identify high-value keywords that your target audience is searching for. Our research helps you rank for terms that drive qualified traffic and conversions.
              </p>
              <ul className="flex flex-wrap gap-[15px]">
                {['Competitor Analysis', 'Search Volume Research', 'Long-Tail Keywords', 'Search Intent Mapping'].map((item, index) => (
                  <li key={index} className="px-[20px] py-[10px] border border-[#21212155] rounded-full text-[14px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* On-Page SEO */}
          <div className="w-full flex justify-between items-center gap-[50px] lg:flex-col lg:items-start">
            <div className="w-[50%] lg:w-full">
              <h2 className="text-[40px] leading-[45px] font-FoundersGrotesk font-medium text-secondry">
                On-Page Optimization
              </h2>
            </div>
            <div className="w-[50%] lg:w-full">
              <p className="paragraph text-secondry mb-[30px]">
                We optimize every element of your web pages to make them search-engine friendly while providing the best user experience possible.
              </p>
              <ul className="flex flex-wrap gap-[15px]">
                {['Content Optimization', 'Meta Tags', 'Header Tags', 'Image Optimization', 'Internal Linking', 'URL Structure'].map((item, index) => (
                  <li key={index} className="px-[20px] py-[10px] border border-[#21212155] rounded-full text-[14px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical SEO */}
          <div className="w-full flex justify-between items-center gap-[50px] lg:flex-col lg:items-start">
            <div className="w-[50%] lg:w-full">
              <h2 className="text-[40px] leading-[45px] font-FoundersGrotesk font-medium text-secondry">
                Technical SEO
              </h2>
            </div>
            <div className="w-[50%] lg:w-full">
              <p className="paragraph text-secondry mb-[30px]">
                We ensure search engines can crawl and index your website efficiently, fixing any technical issues that might be hindering your rankings.
              </p>
              <ul className="flex flex-wrap gap-[15px]">
                {['Site Speed', 'Mobile Optimization', 'Structured Data', 'XML Sitemaps', 'Robots.txt', 'Canonicalization'].map((item, index) => (
                  <li key={index} className="px-[20px] py-[10px] border border-[#21212155] rounded-full text-[14px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Local SEO */}
          <div className="w-full flex justify-between items-center gap-[50px] lg:flex-col lg:items-start">
            <div className="w-[50%] lg:w-full">
              <h2 className="text-[40px] leading-[45px] font-FoundersGrotesk font-medium text-secondry">
                Local SEO
              </h2>
            </div>
            <div className="w-[50%] lg:w-full">
              <p className="paragraph text-secondry mb-[30px]">
                We help local businesses appear in local search results and Google's Local Pack, driving more foot traffic and local leads.
              </p>
              <ul className="flex flex-wrap gap-[15px]">
                {['Google My Business', 'Local Citations', 'NAP Consistency', 'Local Link Building', 'Reviews Management'].map((item, index) => (
                  <li key={index} className="px-[20px] py-[10px] border border-[#21212155] rounded-full text-[14px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full rounded-b-[20px]">
      <div className="w-full pb-[100px]">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                <div className="flex items-center gap-[5px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 0.5,
                    }}
                    className="leading-[130px]"
                  >
                    <Image
                      width={120}
                      height={50}
                      src="https://cdn.discordapp.com/attachments/1437492837225861312/1438417014715846657/ABS2GSmqQ7L8p2Lca6XI64rS5LCd0kxt74QeqWTWJaJ23s0rJ6besm7iDdoFxS940QdicS3uNMjoa-qKdi2sgh4gUvNyR-7cvtKSCrkJOMDRvXBYRKeVHXjlyF67OZVQu2uYSGrrR39mp-MMlihxzvJr1aF0URMMJt1TYCuNy-JGbfyNUldQBws1024-rj.png?ex=6916cdbc&is=69157c3c&hm=7b5a24a25e2dea712e5c0d640affa909bd99743b2b264dec41c0c6891dc0980d&=&format=webp&quality=lossless&width=1702&height=1702"
                      alt="SEO Services"
                      className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
                    />
                  </motion.span>
                  <span className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                    SEO Services
                  </span>
                </div>
              </h1>
            </div>
          </div>
          
          <div className="w-full border-t border-[#21212155] pt-[20px] px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col md:flex-row gap-8">
              {/* Left Column - Text Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium text-gray-700 font-NeueMontreal mb-4">
                  Description:
                </h3>
                <p className="text-gray-600 mb-6 font-NeueMontreal">
                  Our comprehensive SEO services are designed to improve your website's visibility and drive organic traffic. 
                  We combine technical expertise with creative strategies to help your business rank higher in search results.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-gray-400"></div>
                  <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                    Get in touch
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div className="w-full md:w-1/2">
                <div className="w-full h-[300px] md:h-full rounded-xl overflow-hidden shadow-lg">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://alphas.cdn.prismic.io/alphas/aRYZp7pReVYa4cec_Untitleddesign-5.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px bg-gray-200"></div>
      </div>
    </section>
  );
}

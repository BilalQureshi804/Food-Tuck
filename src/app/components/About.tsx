import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const About = () => {
  const features = [
    "Lacus nisi, et ac dapibus sit eu velit in consequat.",
    "Quisque diam pellentesque bibendum non dui volutpat fringilla",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[570px]">
          {/* Left Content */}
          <div className="flex flex-col justify-between lg:h-[570px] mb-8 lg:mb-0">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-4">
                  About us
                </h3>
                <h2 className="text-white text-5xl font-bold leading-tight">
                  <span className="text-[#FF9F0D]">We</span> Create the best
                  <br /> foody product
                </h2>
              </div>

              <p className="text-white text-base leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit 
                augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis 
                sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg 
                      className="w-5 h-5 text-[#FF9F0D] mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >         
                      <path 
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg">
              Read More
            </Button>
          </div>

          {/* Right Content - Images Grid */}
          <div className="lg:h-[570px] flex flex-col justify-between">
            <div className="h-[330px] relative mb-4 lg:mb-0">
              <Image
                src="/aboutUS1.png"
                alt="Main food image"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 h-[194px]">
              <div className="relative">
                <Image
                  src="/aboutUS2.png"
                  alt="Food image 1"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/aboutUS3.png"
                  alt="Food image 2"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
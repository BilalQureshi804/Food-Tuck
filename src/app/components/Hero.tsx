import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className="relative min-h-screen mx-auto w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/herobg.png" 
          alt="Hero background" 
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="absolute left-0 h-full hidden md:block">
          <Image 
            src="/herosideline.png" 
            alt="Decorative line" 
            width={25} 
            height={500}
            className="h-full w-auto"
          />
        </div>
        
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full py-20 lg:py-0 gap-16 lg:gap-20">
          {/* Left column - Text content */}
          <div className="flex flex-col space-y-8 lg:space-y-10 max-w-xl text-center lg:text-left lg:flex-1">
            <div className="relative w-[300px] h-[70px] mx-auto lg:mx-0">
            <h3 className="text-[#FF9F0D] font-great-vibes text-3xl text-center mb-16">
              Its Quick and Amazing
            </h3>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className='text-[#F7A600]'>The</span> Art of speed 
              <br className="hidden sm:block" /> food Qua  
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>  
            <div className="flex justify-center lg:justify-start w-full pt-4">
              <Button size="lg">
                See Menu
              </Button>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative lg:flex-1 w-full lg:w-auto flex justify-center items-center">
            <Image 
              src="/hero.png" 
              alt="hero" 
              width={570} 
              height={570} 
              className="object-contain w-full h-auto max-w-[570px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
 
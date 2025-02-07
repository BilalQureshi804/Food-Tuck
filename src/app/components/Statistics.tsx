import React from 'react'
import Image from 'next/image'

const Statistics = () => {
  const stats = [
    {
      icon: '/Cheifhat.svg',
      number: "420",
      label: "Professional Chefs"
    },
    {
      icon: '/fastfood.svg',
      number: "320",
      label: "Items Of Food"
    },
    {
      icon: '/utensile.svg',
      number: "30+",
      label: "Years Of Experienced"
    },
    {
      icon: '/pizza.svg',
      number: "220",
      label: "Happy Customers"
    }
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image 
          src="/Clients.png" 
          alt="Statistics background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#FF9F0D] flex items-center justify-center mb-3 sm:mb-4 mx-auto backdrop-blur-sm bg-white/10">
                    <div className="text-[#FF9F0D] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                      <Image 
                        src={stat.icon} 
                        alt={stat.label} 
                        width={100} 
                        height={100}
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics 
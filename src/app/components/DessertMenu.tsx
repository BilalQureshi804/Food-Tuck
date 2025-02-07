import React from 'react'
import Image from 'next/image'
import { BiCoffee } from 'react-icons/bi'

const DessertMenu = () => {
  const desserts = [
    {
      name: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32"
    },
    {
      name: "Creamy mascarpone cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43"
    },
    {
      name: "Pastry, blueberries, lemon juice",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14"
    },
    {
      name: "Pain au chocolat",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35"
    }
  ]

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative h-[600px]">
              <Image
                src="/cupcake.png"
                alt="Featured dessert"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Menu */}
          <div className="lg:w-1/2">
            {/* Header */}
            <div className="flex items-center gap-2 mb-8">
              <BiCoffee className="text-[#FF9F0D] text-3xl" />
              <h2 className="text-4xl font-bold">
                Dessert
              </h2>
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              {desserts.map((item, index) => (
                <div key={index} className=" pb-6">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-bold text-black">
                      {item.name}
                    </h3>
                    <span className="text-[#FF9F0D] text-base font-bold">
                      {item.price}$
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2 text-sm">
                    {item.description}
                  </p>
                  <span className="text-gray-500 text-sm">
                    {item.calories}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DessertMenu 
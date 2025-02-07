'use client';

import React from 'react';
import Image from 'next/image';
import Statistics from '../components/Statistics';
import PageHeader from '../components/PageHeader';

interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: number;
}

interface MenuSection {
  title: string;
  image: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "Starter Menu",
    image: "/menupage1.png",
    items: [
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        calories: 560,
        price: 32
      },
      {
        name: "Berries and Creme Tart",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: 700,
        price: 43
      },
      {
        name: "Tormentoso Bush Pizza Pintage",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: 1000,
        price: 14
      },
      {
        name: "Spicy Vegan Potato Curry",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: 560,
        price: 35
      }
    ]
  },
  {
    title: "Main Course",
    image: "/menupage2.png",
    items: [
      {
        name: "Optic Big Breakfast Combo Menu",
        description: "Toasted French bread topped with romano, cheddar",
        calories: 560,
        price: 32
      },
      {
        name: "Cashew Chicken With Stir-Fry",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: 700,
        price: 43
      },
      {
        name: "Vegetables & Green Salad",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: 1000,
        price: 14
      },
      {
        name: "Spicy Vegan Potato Curry",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: 560,
        price: 35
      }
    ]
  },
  {
    title: "Dessert",
    image: "/menupage3.png",
    items: [
      {
        name: "Fig and Lemon Cake",
        description: "Toasted French bread topped with romano, cheddar",
        calories: 560,
        price: 32
      },
      {
        name: "Creamy Mascarpone Cake",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: 700,
        price: 43
      },
      {
        name: "Pastry, Blueberries, Lemon Juice",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: 1000,
        price: 14
      },
      {
        name: "Pain au Chocolat",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: 560,
        price: 35
      }
    ]
  },
  {
    title: "Drinks",
    image: "/menupage4.png",
    items: [
      {
        name: "Caffè Macchiato",
        description: "Toasted French bread topped with romano, cheddar",
        calories: 560,
        price: 32
      },
      {
        name: "Aperol Spritz Cappuccino",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: 700,
        price: 43
      },
      {
        name: "Caffè Latte Campuri",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: 1000,
        price: 14
      },
      {
        name: "Tormentoso Bush Tea Pintage",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: 560,
        price: 35
      }
    ]
  }
];

const MenuSection = ({ section, index }: { section: MenuSection; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-stretch justify-center`}>
        <div className="flex-1 w-full max-w-xl flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b border-gray-200 pb-1 -mb-1 text-center">
            {section.title}
          </h2>
          <ul className="space-y-3 overflow-y-auto flex-1 pt-4">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center gap-2 group hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 group-hover:text-[#FF9F0D] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-[1px]">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-[1px]">{item.calories} CAL</p>
                </div>
                <span className="text-[#FF9F0D] font-bold whitespace-nowrap text-lg">
                  ${item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Menu() {
  return (
    <div className="bg-white">
      <PageHeader title="Our Menu" currentPage="Menu" />
      
      <div className="container mx-auto py-8">
        {/* Menu Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-2">
            Special Selection
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            Delicious <span className="text-[#FF9F0D]">Menu</span>
          </h2>
        </div>

        {/* First Half of Menu Sections */}
        <div className="space-y-16">
          {menuData.slice(0, 2).map((section, index) => (
            <MenuSection key={section.title} section={section} index={index} />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <Statistics />
        </div>

        {/* Second Half of Menu Sections */}
        <div className="space-y-16">
          {menuData.slice(2).map((section, index) => (
            <MenuSection key={section.title} section={section} index={index + 2} />
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="font-Inter text-base md:text-lg text-[#FF9F0D]">Partners & Clients</h4>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
              We work with the best people
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Image
                  key={num}
                  src={`/partner${num}.png`}
                  alt={`Partner ${num}`}
                  width={100}
                  height={50}
                  className="hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
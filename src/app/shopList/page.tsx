'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/PageHeader';
import { FaSearch, FaStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  onSale?: boolean;
}

const ShopList = () => {
  const [sortBy, setSortBy] = useState('Newest');
  const [showCount, setShowCount] = useState('Default');

  const products: Product[] = [
    {
      id: 1,
      name: 'Fresh Lime',
      price: 38.00,
      oldPrice: 45.00,
      image: '/menu1.png',
      onSale: true
    },
    {
      id: 2,
      name: 'Chocolate Muffin',
      price: 28.00,
      image: '/menu2.png',
      onSale: true
    },
    {
      id: 3,
      name: 'Burger',
      price: 21.00,
      oldPrice: 45.00,
      image: '/menu3.png'
    },
    {
      id: 4,
      name: 'Country Burger',
      price: 45.00,
      image: '/menu4.png'
    },
    {
      id: 5,
      name: 'Drink',
      price: 23.00,
      oldPrice: 45.00,
      image: '/menu1.png'
    },
    {
      id: 6,
      name: 'Pizza',
      price: 43.00,
      image: '/menu2.png'
    }
  ];

  const categories = [
    'Sandwiches',
    'Burger',
    'Chicken Chup',
    'Drink',
    'Pizza',
    'Thi',
    'Non Veg',
    'Uncategorized'
  ];

  return (
    <div className="bg-white">
      <PageHeader title='Shop List' currentPage='Shop List' />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters Bar */}
            <div className="flex flex-wrap justify-between items-center mb-8 p-4 bg-gray-50">
              <div className="flex gap-4 items-center">
                <span className="text-gray-600">Sort By :</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-gray-600">Show :</span>
                <select 
                  value={showCount}
                  onChange={(e) => setShowCount(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Default</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {product.onSale && (
                      <span className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded">
                        Sale!
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" size={16} />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                      )}
                      <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">«</button>
              <button className="px-3 py-1 border rounded bg-orange-500 text-white">1</button>
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">2</button>
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">3</button>
              <button className="px-3 py-1 border rounded hover:bg-orange-500 hover:text-white">»</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Search */}
            <div className="mb-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="flex-1 border p-2 rounded-l focus:outline-none"
                />
                <button className="bg-orange-500 text-white px-4 rounded-r">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Filter By Price</h3>
              <div className="flex items-center gap-4">
                <span>From $0 to $8000</span>
                <button className="text-sm bg-gray-200 px-4 py-1 rounded">
                  Filter
                </button>
              </div>
            </div>

            {/* Featured Product */}
            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Perfect Taste</h3>
              <h2 className="text-2xl font-bold mb-4">Classic Restaurant</h2>
              <div className="text-orange-500 text-xl font-bold mb-4">45.00$</div>
              <button className="text-white border border-white px-4 py-2 rounded hover:bg-orange-500 hover:border-orange-500 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/PageHeader';
import { FaStar, FaHeart, FaExchangeAlt } from 'react-icons/fa';
import ProductTabs from './components/ProductTabs';
import SimilarProducts from './components/SimilarProducts';
// Removed the problematic imports
const ShopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const productImages = [
    '/chooseFood1.png',
    '/chooseFood2.png',
    '/choose3.png',
    '/choose6.png'
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white">
      <PageHeader title="Shop Detail" currentPage="Shop Detail" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images Section */}
          <div className="lg:w-1/2 flex flex-col-reverse md:flex-row md:gap-0 gap-4">
            {/* Thumbnail Images - Now a vertical column on desktop */}
            <div className="md:w-24 flex flex-row md:flex-col gap-4 order-2 md:order-1">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 md:w-24 md:h-24 cursor-pointer transition-all duration-200 ${
                    activeImage === index 
                      ? 'ring-2 ring-orange-500' 
                      : 'hover:ring-2 hover:ring-orange-200'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={img}
                    alt={`Product view ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="md:flex-1 relative order-1 md:order-2 flex justify-center">
              <div className="relative w-[380px] h-[350px]">
                <Image
                  src={productImages[activeImage]}
                  alt="Yummy Chicken Chup"
                  fill
                  className="object-cover rounded-lg"
                />
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded">
                  In stock
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold mb-4">Yummy Chicken Chup</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">5.0 Rating</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-600">22 Review</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">54.00$</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
              vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
              mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold mb-2">Dictum/cursus/Risus</h3>
              <div className="flex items-center gap-4">
                <div className="flex border rounded">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 border-r hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600 transition-colors">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
                <FaHeart />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
                <FaExchangeAlt />
                Compare
              </button>
            </div>

            <div className="border-t pt-6">
              <p className="mb-2">
                <span className="font-semibold">Category:</span>{" "}
                <span className="text-gray-600">Pizza</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Tag:</span>{" "}
                <span className="text-gray-600">Our Shop</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Share:</span>
                <div className="flex gap-2">
                  {/* Add your social media icons here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Reviews Tabs */}
      <ProductTabs />
      <SimilarProducts />
    </div>
  );
};

export default ShopDetails;

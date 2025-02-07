'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
}

const SimilarProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Fresh Lime',
      price: 38.00,
      oldPrice: 45.00,
      image: '/menu1.png'
    },
    {
      id: 2,
      name: 'Chocolate Muffin',
      price: 28.00,
      image: '/menu2.png'
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
      name: 'Fresh Lime',
      price: 38.00,
      oldPrice: 45.00,
      image: '/menu1.png'
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Similar Products</h2>
          <div className="flex gap-2">
            <button className="p-2 border rounded-full hover:bg-orange-500 hover:text-white transition-colors">
              <IoChevronBack size={24} />
            </button>
            <button className="p-2 border rounded-full hover:bg-orange-500 hover:text-white transition-colors">
              <IoChevronForward size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </button>
                </div>
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
      </div>
    </div>
  );
};

export default SimilarProducts;
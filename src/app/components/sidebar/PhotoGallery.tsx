import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/chooseFood1.png',
    alt: 'Delicious pizza with toppings',
  },
  {
    src: '/chooseFood2.png',
    alt: 'Gourmet dish presentation',
  },
  {
    src: '/chooseFood3.png',
    alt: 'Grilled salmon with vegetables',
  },
  {
    src: '/chooseFood1.png',
    alt: 'BBQ platter with sides',
  },
  {
    src: '/chooseFood2.png',
    alt: 'Appetizer plate',
  },
  {
    src: '/chooseFood4.png',
    alt: 'French toast with fruits',
  },
];

const PhotoGallery = () => {
  return (
    <div className="space-y-4">
      <h3 className='text-lg font-bold text-gray-800 border-b border-gray-100 pb-4'>Instagram Feed</h3>
      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((image, index) => (
          <div key={index} className="group overflow-hidden rounded-lg aspect-square shadow-sm">
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              className="transition-all duration-500 group-hover:scale-110 w-full h-full object-cover group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery; 
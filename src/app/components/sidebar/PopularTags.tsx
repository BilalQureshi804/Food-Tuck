import React from 'react';
import Link from 'next/link';

const tags = [
  'Sandwich', 'Tikka', 'Bbq', 'Restaurant', 'Chicken Sharma',
  'Health', 'Fastfood', 'Food', 'Pizza', 'Burger', 'Chicken'
];

const PopularTags = () => {
  return (
    <div className="space-y-4">
      <h3 className='text-lg font-bold text-gray-800 border-b border-gray-100 pb-4'>Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            href={`/blog/tag/${tag.toLowerCase()}`}
            key={tag}
            className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-[#FF9F0D] hover:text-white hover:border-[#FF9F0D] transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags; 
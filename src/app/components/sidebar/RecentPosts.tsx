// app/components/sidebar/RecentPosts.tsx

import React from 'react';

const posts = [
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blog1.png',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blog2.png',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blog3.png',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/blog4.png',
  },
];

const RecentPosts = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Post</h2>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            src={post.image}
            alt="Post"
            className="w-16 h-16 rounded-md object-cover mr-4"
          />
          <div>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="text-sm">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
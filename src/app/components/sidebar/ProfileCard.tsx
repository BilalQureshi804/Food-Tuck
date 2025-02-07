// app/components/ProfileCard.tsx

import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white text-black text-center p-6 rounded-lg w-80 mx-auto">
      <img
        src="/profileGuy.png"
        alt="Profile"
        className="rounded-full w-24 h-24 mx-auto object-cover"
      />
      <h2 className="mt-4 text-xl font-semibold">Prince Miyako</h2>
      <p className="text-gray-400">Blogger/Photographer</p>
      <div className="flex justify-center items-center mt-2">
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 text-gray-400">(1 Review)</span>
      </div>
      <p className="text-sm mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
      </p>
      <div className="flex justify-center gap-4 mt-4 text-xl">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </div>
  );
};

export default ProfileCard;
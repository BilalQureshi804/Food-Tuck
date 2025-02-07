import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaTwitter className="w-6 h-6" />, url: '#', platform: 'Twitter' },
  { icon: <FaYoutube className="w-6 h-6" />, url: '#', platform: 'YouTube' },
  { icon: <FaPinterest className="w-6 h-6" />, url: '#', platform: 'Pinterest' },
  { icon: <FaInstagram className="w-6 h-6" />, url: '#', platform: 'Instagram' },
  { icon: <FaFacebook className="w-6 h-6" />, url: '#', platform: 'Facebook' },
];

const SocialFollow = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <Link
            href={social.url}
            key={social.platform}
            className="p-2 hover:text-primary transition-colors"
            aria-label={`Follow us on ${social.platform}`}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialFollow; 
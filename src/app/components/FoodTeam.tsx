"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'v8ri5c79', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
});

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl?: string;
  description: string;
  available: boolean;
}

const fetchChefs = async (): Promise<Chef[]> => {
  const query = `*[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    "imageUrl": image.asset->url,
    description,
    available
  }`;
  return await client.fetch(query);
};

export default function Chefs() {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    fetchChefs().then((data) => setChefs(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Chefs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <div key={chef._id} className="border rounded-lg p-4 shadow-lg bg-white flex flex-col items-center">
            {chef.imageUrl && (
              <div className="w-48 h-48 relative">
                <Image
                  src={chef.imageUrl}
                  alt={chef.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}
            <h2 className="text-xl font-semibold mt-3 text-center">{chef.name}</h2>
            <p className="text-gray-600 text-center">{chef.position}</p>
            <p className="text-lg font-bold mt-2 text-blue-600 text-center">{chef.experience} years of experience</p>
            <p className="text-gray-700 text-center">Specialty: {chef.specialty}</p>
            <p className="text-gray-700 mt-2 text-center">{chef.description}</p>
            <p className={`mt-3 text-sm font-medium text-center ${chef.available ? 'text-green-600' : 'text-red-600'}`}>
              {chef.available ? 'Currently Active' : 'Not Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

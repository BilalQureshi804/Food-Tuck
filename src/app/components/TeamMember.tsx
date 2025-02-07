"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/utils/sanityClient";


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

// Fetch data function
const fetchChefs = async (): Promise<Chef[]> => {
  try {
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
  } catch (error) {
    console.error("Error fetching chefs:", error);
    return [];
  }
};

export default function Chefs() {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChefs()
      .then((data) => setChefs(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Chefs</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading chefs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef) => (
            <div key={chef._id} className="border rounded-lg p-4 shadow-lg bg-white">
              {chef.imageUrl && (
                <Image
                  src={chef.imageUrl}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-xl font-semibold mt-3">{chef.name}</h2>
              <p className="text-gray-600">{chef.position}</p>
              <p className="text-lg font-bold mt-2 text-blue-600">
                {chef.experience} years of experience
              </p>
              <p className="text-gray-700">Specialty: {chef.specialty}</p>
              <p className="text-gray-700 mt-2">{chef.description}</p>
              <p
                className={`mt-3 text-sm font-medium ${
                  chef.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {chef.available ? "Currently Active" : "Not Available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

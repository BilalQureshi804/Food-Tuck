"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "next-sanity";

// Sanity client
const client = createClient({
  projectId: "v8ri5c79", // Replace with your Sanity project ID
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});

interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  imageUrl?: string;
  description: string;
  available: boolean;
}

// Function to fetch a single food item based on ID
const fetchFoodItem = async (id: string): Promise<FoodItem | null> => {
  const query = `*[_type == "food" && _id == "${id}"][0] {
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    "imageUrl": image.asset->url,
    description,
    available
  }`;
  return await client.fetch(query);
};

// The page component using dynamic routing and `params`
export default function FoodDetail({ params }: { params: { id: string } }) {
  const { id } = params; // Directly accessing the dynamic route parameter from params
  const [foodItem, setFoodItem] = useState<FoodItem | null>(null);

  // Fetch the food item when the component mounts
  useEffect(() => {
    if (id) {
      fetchFoodItem(id).then((data) => setFoodItem(data));
    }
  }, [id]);

  // Show loading state if data is not yet fetched
  if (!foodItem) {
    return <div className="text-center text-lg font-semibold p-6">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 mb-6 lg:mb-0">
          {foodItem.imageUrl && (
            <Image
              src={foodItem.imageUrl}
              alt={foodItem.name}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-xl"
            />
          )}
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl font-extrabold text-gray-800">{foodItem.name}</h1>
          <p className="text-lg text-gray-600">{foodItem.category}</p>
          <div className="mt-4 flex items-center">
            <p className="text-3xl font-semibold text-green-600">${foodItem.price}</p>
            {foodItem.originalPrice && foodItem.originalPrice > foodItem.price && (
              <p className="ml-4 text-xl text-gray-500 line-through">${foodItem.originalPrice}</p>
            )}
          </div>
          <p className="text-gray-700 mt-4">{foodItem.description}</p>
          {foodItem.tags && foodItem.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {foodItem.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className={`mt-6 text-xl font-medium ${foodItem.available ? "text-green-600" : "text-red-600"}`}>
            {foodItem.available ? "Available" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}

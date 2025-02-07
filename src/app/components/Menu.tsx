"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "next-sanity";
import Link from "next/link";

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

const fetchFoodItems = async (): Promise<FoodItem[]> => {
  const query = `*[_type == "food"] {
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

export default function Menu() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    fetchFoodItems().then((data) => setFoodItems(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Food Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <Link key={item._id} href={`/food/${item._id}`}>
            <div className="border rounded-lg p-4 shadow-lg bg-white cursor-pointer">
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-lg font-bold mt-2 text-green-600">${item.price}</p>
              {item.originalPrice && item.originalPrice > item.price && (
                <p className="text-sm text-gray-500 line-through">${item.originalPrice}</p>
              )}
              <p className="text-gray-700 mt-2">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p
                className={`mt-3 text-sm font-medium ${
                  item.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.available ? "Available" : "Out of Stock"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import React from "react";

interface HouseCardProps {
  image: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  onSwipe: (liked: boolean) => void;
}

export default function HouseCard({
  image,
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  onSwipe,
}: HouseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-96">
      {/* House Image */}
      <img src={image} alt="House" className="w-full h-64 object-cover" />

      {/* House Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{address}</h2>
        <p className="text-gray-700">Price: {price}</p>
        <p className="text-gray-700">Bedrooms: {bedrooms}</p>
        <p className="text-gray-700">Bathrooms: {bathrooms}</p>
        <p className="text-gray-700">Square Feet: {squareFeet}</p>
      </div>

      {/* Swipe Buttons (Replaced Text with ❌ and ❤️) */}
      <div className="flex justify-between p-4">
        <button
          onClick={() => onSwipe(false)}
          className="p-4 bg-black text-white rounded-full hover:bg-gray-800 shadow-md text-3xl"
        >
          ❌
        </button>
        <button
          onClick={() => onSwipe(true)}
          className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md text-3xl"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { doc, getDoc } from 'firebase/firestore';

interface HouseCardProps {
  image: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}

export default function HouseCard({
  image,
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
}: HouseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-96">
      {/* House Image */}
      <img src={image} alt="House" className="w-full h-64 object-cover" />

      {/* House Details */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-gray-900">{address}</h2>
        <p className="text-gray-700">Price: {price}</p>
        <p className="text-gray-700">Bedrooms: {bedrooms}</p>
        <p className="text-gray-700">Bathrooms: {bathrooms}</p>
        <p className="text-gray-700">Square Feet: {squareFeet}</p>
      </div>
    </div>
  );
}

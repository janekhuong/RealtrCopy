import React, { useState } from "react";

interface HouseCardProps {
  images: string[]; // Array of images
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  nearby: string[]; // Array of nearby places
}

export default function HouseCard({
  images,
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  description,
  nearby,
}: HouseCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="house-card-wrapper">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-96">
        {/* Image Carousel */}
        <div className="relative house-card-image-container">
          <img src={images[currentIndex]} alt="House" className="w-full h-56 object-cover" />

          {/* Left Arrow */}
          <button onClick={prevImage} className="house-card-arrow house-card-arrow-left">
            ❮
          </button>

          {/* Right Arrow */}
          <button onClick={nextImage} className="house-card-arrow house-card-arrow-right">
            ❯
          </button>

          {/* Page Dots */}
          <div className="house-card-dots">
            {images.map((_, index) => (
              <span key={index} className={`house-card-dot ${index === currentIndex ? "active" : ""}`}></span>
            ))}
          </div>
        </div>

        {/* House Details */}
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold text-gray-900">{address}</h2>
          <p className="text-gray-700">Price: {price}</p>
          <p className="text-gray-700">Bedrooms: {bedrooms}</p>
          <p className="text-gray-700">Bathrooms: {bathrooms}</p>
          <p className="text-gray-700">Square Feet: {squareFeet}</p>
        </div>

        {/* Description Section */}
        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-900">Description</h3>
          <p className="text-gray-700 text-sm mt-1">{description}</p>
        </div>

        {/* Nearby Places Section */}
        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-900">Nearby</h3>
          <ul className="text-gray-700 text-sm mt-1 list-disc list-inside">
            {nearby.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

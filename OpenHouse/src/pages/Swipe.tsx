

import { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import HouseCard from "../components/HouseCard";

const firebaseConfig = {
  apiKey: "AIzaSyDoTs2FwrW77NX_1cSE_sKnnpazHdp34EU",
  authDomain: "openhouse-database.firebaseapp.com",
  projectId: "openhouse-database",
  storageBucket: "openhouse-database.firebasestorage.app",
  messagingSenderId: "1006718061358",
  appId: "1:1006718061358:web:d96d3c4bbd9ddb9ceb08bf",
};

const app = initializeApp(firebaseConfig);
const docRefApt = doc(db, 'listings', 'ExampleAptListing1');
const docSnapApt = await getDoc(docRefApt);

if (docSnapApt.exists()) {
  const docSnapAptData = docSnapApt.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


// Import house images
import house1a from "../assets/house1a.jpeg";
import house1b from "../assets/house1b.jpeg";
import house1c from "../assets/house1c.jpeg";
import house2a from "../assets/house2a.jpeg";
import house2b from "../assets/house2b.jpeg";
import house3a from "../assets/house3a.jpeg";
import house3b from "../assets/house3b.jpeg";
import house4a from "../assets/house4a.jpeg";
import house4b from "../assets/house4b.jpeg";
import house5a from "../assets/house5a.jpeg";
import house5b from "../assets/house5b.jpeg";

// Define house listings with multiple images
const allHouses = [
  {
    images: [house1a, house1b, house1c],
    address: "240 Rue Milton, Montreal, QC",
    price: 1975,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 600,
    description: "A cozy apartment located in the heart of Montreal, perfect for young professionals.",
    nearby: ["McGill University", "Grocery Stores", "Public Transport"],
  },
  {
    images: [house2a, house2b],
    address: "3485 Rue Aylmer, Montreal, QC",
    price: 2600,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 0,
    description: "Modern condo with great amenities and close to several downtown attractions.",
    nearby: ["Restaurants", "Shopping Centers", "Metro Station"],
  },
  {
    images: [house3a, house3b],
    address: "3636 Rue Clark, Montreal, QC",
    price: 1300,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 350,
    description: "Affordable and compact studio apartment in a lively and safe neighborhood.",
    nearby: ["Cafes", "Parks", "Public Transport"],
  },
  {
    images: [house4a, house4b],
    address: "235 Rue Sherbrooke, Montreal, QC",
    price: 1680,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 0,
    description: "Spacious one-bedroom apartment with stunning city views. Great neighnorhood!",
    nearby: ["Museums", "Nightlife", "Hospitals"],
  },
  {
    images: [house5a, house5b],
    address: "350 Boul. De Maisonneuve, Montreal, QC",
    price: 1700,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 0,
    description: "Luxury high-rise apartment with concierge and gym facilities. Perfect for urban living.",
    nearby: ["Entertainment District", "Grocery Stores", "Public Transit"],
  },
];

export default function Swipe() {
  const [index, setIndex] = useState(0);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    minBedrooms: 1,
    minBathrooms: 1,
    minSquareFeet: 0,
  });

  const [houses, setHouses] = useState(allHouses);

  const handleSwipe = (liked: boolean) => {
    if (index < houses.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(-1); // Stack finished
    }
  };

  const handleRestart = () => {
    setIndex(0);
    applyFilters();
  };

  const applyFilters = () => {
    const filteredHouses = allHouses.filter(
      (house) =>
        house.price >= filters.minPrice &&
        house.price <= filters.maxPrice &&
        house.bedrooms >= filters.minBedrooms &&
        house.bathrooms >= filters.minBathrooms &&
        house.squareFeet >= filters.minSquareFeet
    );
    setHouses(filteredHouses);
    setIndex(filteredHouses.length > 0 ? 0 : -2); // -2 if no results found
  };

  return (
    <div className="swipe-container">
      {/* Filter Section */}
      <div className="filter-container">
        <div>
          <label>Min Price ($)</label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
          />
        </div>

        <div>
          <label>Max Price ($)</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          />
        </div>

        <div>
          <label>Bedrooms</label>
          <input
            type="number"
            value={filters.minBedrooms}
            onChange={(e) => setFilters({ ...filters, minBedrooms: Number(e.target.value) })}
          />
        </div>

        <div>
          <label>Bathrooms</label>
          <input
            type="number"
            value={filters.minBathrooms}
            onChange={(e) => setFilters({ ...filters, minBathrooms: Number(e.target.value) })}
          />
        </div>

        <div>
          <label>Min Sq Ft</label>
          <input
            type="number"
            value={filters.minSquareFeet}
            onChange={(e) => setFilters({ ...filters, minSquareFeet: Number(e.target.value) })}
          />
        </div>

        <button onClick={applyFilters}>Apply</button>
      </div>

      {/* House Card Section */}
      <div className="house-card-container">
        {index >= 0 ? (
          <HouseCard
            images={houses[index].images}
            address={houses[index].address}
            price={`$${houses[index].price}/Monthly`}
            bedrooms={houses[index].bedrooms}
            bathrooms={houses[index].bathrooms}
            squareFeet={houses[index].squareFeet === 0 ? "N/A" : houses[index].squareFeet}
            description={houses[index].description}
            nearby={houses[index].nearby}
          />
        ) : index === -2 ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700">No results found under your filters.</h2>
            <button
              className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
              onClick={applyFilters}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700">You've explored all matching houses!</h2>
            <button
              className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        )}

        {/* Swipe Buttons Centered Below Card */}
        {index >= 0 && (
          <div className="swipe-buttons">
            <button onClick={() => handleSwipe(false)} className="swipe-left">
              ❌
            </button>
            <button onClick={() => handleSwipe(true)} className="swipe-right">
              ❤️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


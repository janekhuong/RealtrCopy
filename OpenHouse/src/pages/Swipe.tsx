import { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
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
const db = getFirestore(app);
const docRefApt = doc(db, 'listings', 'ExampleAptListing1');
const docSnapApt = await getDoc(docRefApt);

if (docSnapApt.exists()) {
  const docSnapAptData = docSnapApt.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


// Import images
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpeg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpeg";
import house5 from "../assets/house5.jpeg";

// Define house listings with placeholders
const allHouses = [
  { image: house1, address: (docSnapAptData.address), price: 1975, bedrooms: 1, bathrooms: 1, squareFeet: 600 },
  { image: house2, address: "3485 Rue Aylmer, Montreal, USA", price: 2600, bedrooms: 1, bathrooms: 1, squareFeet: 0 },
  { image: house3, address: "3636 Rue Clark, Montreal, USA", price: 1300, bedrooms: 1, bathrooms: 1, squareFeet: 350 },
  { image: house4, address: "235 Rue Sherbrooke, Montreal, USA", price: 1680, bedrooms: 1, bathrooms: 1, squareFeet: 0 },
  { image: house5, address: "350 Boul. De Maisonneueve, Montreal, USA", price: 1700, bedrooms: 1, bathrooms: 1, squareFeet: 0 },
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
            image={houses[index].image}
            address={houses[index].address}
            price={`$${houses[index].price}/Monthly`}
            bedrooms={houses[index].bedrooms}
            bathrooms={houses[index].bathrooms}
            squareFeet={houses[index].squareFeet === 0 ? "N/A" : houses[index].squareFeet}
            onSwipe={handleSwipe}
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

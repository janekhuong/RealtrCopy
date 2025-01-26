import { useState } from "react";
import HouseCard from "../components/HouseCard";

// Import images
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpeg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpeg";
import house5 from "../assets/house5.jpeg";

// Define house listings with placeholders
const allHouses = [
  { image: house1, address: "240 Rue Milton, Montreal, USA", price: 1975, bedrooms: 1, bathrooms: 1, squareFeet: 600 },
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

  const resetFilters = () => {
    setFilters({ minPrice: 0, maxPrice: 10000, minBedrooms: 1, minBathrooms: 1, minSquareFeet: 0 });
    setHouses(allHouses);
    setIndex(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pb-20">
{/* Filter Section - Uses CSS to force horizontal layout */}
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


      {/* House Card, No Results Message, or Completion Message */}
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
      ) : index === -2 ? ( // No matching results
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold text-gray-700">No results found under your filters.</h2>
          <button
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold text-gray-700">You've explored all matching houses!</h2>
          <button
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full bg-white p-4 shadow-md flex justify-around">
        <button className="text-gray-700 hover:text-red-600 text-lg">🏠 Home</button>
        <button className="text-gray-700 hover:text-red-600 text-lg">❤️ Liked Houses</button>
        <button className="text-gray-700 hover:text-red-600 text-lg">👤 Profile</button>
      </div>
    </div>
  );
}

import { useState } from "react";
import HouseCard from "../components/HouseCard";

// Import images
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpeg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpeg";
import house5 from "../assets/house5.jpeg";

// Define house listings with placeholders
const houses = [
  { image: house1, address: "123 Main St, Anytown, USA", price: "$450,000", bedrooms: 3, bathrooms: 2, squareFeet: 1800 },
  { image: house2, address: "456 Elm St, Somewhere, USA", price: "$320,000", bedrooms: 2, bathrooms: 1, squareFeet: 1400 },
  { image: house3, address: "789 Oak St, Nowhere, USA", price: "$550,000", bedrooms: 4, bathrooms: 3, squareFeet: 2200 },
  { image: house4, address: "101 Pine St, Smalltown, USA", price: "$275,000", bedrooms: 2, bathrooms: 1, squareFeet: 1300 },
  { image: house5, address: "202 Maple St, Bigcity, USA", price: "$670,000", bedrooms: 5, bathrooms: 4, squareFeet: 2800 },
];

export default function Swipe() {
  const [index, setIndex] = useState(0);

  const handleSwipe = (liked: boolean) => {
    console.log(liked ? "Liked" : "Disliked", houses[index]);
    if (index < houses.length - 1) {
      setIndex(index + 1);
    } else {
      alert("No more houses!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <HouseCard
        image={houses[index].image}
        address={houses[index].address}
        price={houses[index].price}
        bedrooms={houses[index].bedrooms}
        bathrooms={houses[index].bathrooms}
        squareFeet={houses[index].squareFeet}
        onSwipe={handleSwipe}
      />
    </div>
  );
}

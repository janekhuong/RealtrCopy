import { useState } from "react";
import HouseCard from "../components/HouseCard";

// Import images from the assets folder
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpeg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpeg";
import house5 from "../assets/house5.jpeg";

// Store image imports in an array
const houseImages = [house1, house2, house3, house4, house5];

export default function Swipe() {
  const [index, setIndex] = useState(0);

  const handleSwipe = (liked: boolean) => {
    console.log(liked ? "Liked" : "Disliked", houseImages[index]);
    if (index < houseImages.length - 1) {
      setIndex(index + 1);
    } else {
      alert("No more houses!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <HouseCard image={houseImages[index]} />
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => handleSwipe(false)}
          className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
        >
          Dislike
        </button>
        <button
          onClick={() => handleSwipe(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
        >
          Like
        </button>
      </div>
    </div>
  );
}
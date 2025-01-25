import { useState } from "react";
import HouseCard from "../components/HouseCard";

const houseImages = ["/house1.jpg", "/house2.jpg", "/house3.jpg"];

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

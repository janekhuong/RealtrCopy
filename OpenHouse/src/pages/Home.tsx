import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">OpenHouse</h1>
      <p className="text-gray-600">Swipe, Match, and Find Your Perfect Home</p>
      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        onClick={() => navigate("/swipe")}
      >
        Get Started
      </button>
    </div>
  );
}

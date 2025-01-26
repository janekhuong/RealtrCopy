import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <button onClick={() => navigate("/swipe")} className="text-gray-700 hover:text-red-600 text-lg">
        📜 Feed
      </button>
      <button onClick={() => navigate("/liked")} className="text-gray-700 hover:text-red-600 text-lg">
        ❤️ Liked Houses
      </button>
      <button onClick={() => navigate("/messages")} className="text-gray-700 hover:text-red-600 text-lg">
        💬 Messages
      </button>
      <button onClick={() => navigate("/profile")} className="text-gray-700 hover:text-red-600 text-lg">
        👤 Profile
      </button>
    </div>
  );
}

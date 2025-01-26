import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-red-600 mb-2">OpenHouse</h1>
      <p className="text-gray-700 text-lg text-center">
        Swipe, Match, and Find Your Perfect Home
      </p>

      {/* Get Started Button */}
      <button
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        onClick={() => navigate("/swipe")}
      >
        Get Started
      </button>
      
      {/* Sign Up / Login Button */}
      <button
  className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
  onClick={() => navigate("/signup")} // ✅ Make sure this matches the new route
>
  Sign Up / Login
</button>


      {/* Descriptive Feature Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-xl text-center border border-red-200">
          <h2 className="text-xl font-semibold text-red-600">Personalized Matches</h2>
          <p className="text-gray-600 mt-2">
            AI-powered recommendations tailored to your preferences.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center border border-red-200">
          <h2 className="text-xl font-semibold text-red-600">Instant Insights</h2>
          <p className="text-gray-600 mt-2">
            Detailed property information at your fingertips.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center border border-red-200">
          <h2 className="text-xl font-semibold text-red-600">Easy Connections</h2>
          <p className="text-gray-600 mt-2">
            Seamlessly match and communicate with property owners.
          </p>
        </div>
      </div>
    </div>
  );
}
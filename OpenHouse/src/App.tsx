import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // ✅ Home is the starting page
import Swipe from "./pages/Swipe";
import Liked from "./pages/Liked";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Start on Home */}
        <Route path="/swipe" element={<Swipe />} /> {/* ✅ Navigate to Swipe */}
        <Route path="/liked" element={<Liked />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

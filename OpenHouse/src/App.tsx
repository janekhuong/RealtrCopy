import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // ✅ Wraps pages with NavBar
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Liked from "./pages/Liked";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/swipe"
          element={
            <Layout>
              <Swipe />
            </Layout>
          }
        />
        <Route
          path="/liked"
          element={
            <Layout>
              <Liked />
            </Layout>
          }
        />
        <Route
          path="/messages"
          element={
            <Layout>
              <Messages />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

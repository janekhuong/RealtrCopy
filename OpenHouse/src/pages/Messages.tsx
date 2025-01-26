import { MessageCircle } from "lucide-react"; // Chat icon
import { useNavigate } from "react-router-dom";
import "../index.css"; // Import global styles

export default function Messages() {
  const navigate = useNavigate();

  return (
    <div className="messages-container">
      <h1 className="messages-title">Messages</h1>

      <div className="messages-list">
        <div className="message-card" onClick={() => navigate("/chat/240-rue-milton")}>
          <div className="message-info">
            <h2 className="message-address">240 Rue Milton</h2>
            <p className="message-preview">You are free to come over this Tuesday...</p>
          </div>
          <MessageCircle className="message-icon" />
        </div>
      </div>
    </div>
  );
}

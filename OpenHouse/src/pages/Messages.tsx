import { MessageCircle } from "lucide-react"; // Chat icon
import { useNavigate } from "react-router-dom";
import "../index.css"; // Import global styles

export default function Messages() {
  const navigate = useNavigate();

  const messages = [
    {
      id: "1",
      address: "240 Rue Milton",
      preview: "You are free to come over this Tuesday...",
    },
  ];

  return (
    <div className="messages-container">
      <h1 className="messages-title">Messages</h1>

      <div className="messages-background">
        <div className="messages-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className="message-card"
              onClick={() => navigate(`/chat/${message.address.replace(/\s+/g, '-').toLowerCase()}`)}
            >
              <div>
                <h2 className="message-address">{message.address}</h2>
                <p className="message-preview">{message.preview}</p>
              </div>
              <MessageCircle className="message-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

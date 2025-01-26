import { Edit, MapPin, User } from "lucide-react"; // Icons for styling
import "../index.css"; // Import global styles

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/profile-pic.jpeg" alt="Profile" className="profile-image" />
        <button className="edit-button">
          <Edit className="edit-icon" />
        </button>
      </div>

      <div className="profile-info">
        <h1 className="profile-name">John Doe, 25</h1>
        <p className="profile-location">
          <MapPin className="location-icon" /> Montreal, QC
        </p>
        <p className="profile-bio">
          "Exploring the city, enjoying coffee, and finding the perfect home."
        </p>
      </div>

      <div className="profile-stats">
        <div className="profile-stat">
          <User className="profile-stat-icon" />
          <p><strong>10</strong> Matches</p>
        </div>
        <div className="profile-stat">
          <User className="profile-stat-icon" />
          <p><strong>5</strong> Pending</p>
        </div>
      </div>
    </div>
  );
}

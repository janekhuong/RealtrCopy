import { Edit, MapPin, User } from "lucide-react"; // Icons for styling
import "../index.css"; // Import global styles

const profile = {
  name: "John Doe",
  age: 25,
  location: "Montreal, QC",
  bio: "Exploring the city, enjoying coffee, and finding the perfect home.",
  matches: 10,
  pending: 5,
};

export default function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image-container">
            <img src="/profile-pic.jpeg" alt="Profile" className="profile-image" />
          </div>
          <button className="edit-button">
            <Edit className="edit-icon" />
          </button>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">{profile.name}, {profile.age}</h2>
          <p className="profile-location">
            <MapPin className="location-icon" /> {profile.location}
          </p>
          <p className="profile-bio">"{profile.bio}"</p>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <User className="profile-stat-icon" />
            <p><strong>{profile.matches}</strong> Matches</p>
          </div>
          <div className="profile-stat">
            <User className="profile-stat-icon" />
            <p><strong>{profile.pending}</strong> Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}

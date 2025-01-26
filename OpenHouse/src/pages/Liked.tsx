import { CheckCircle, Hourglass } from "lucide-react"; // Icons for Match & Pending
import "../index.css"; // Import global styles

// Dummy Liked Houses List
const likedHouses = [
  { id: "1", address: "240 Rue Milton, Montreal, QC", price: 1975 },
  { id: "2", address: "3485 Rue Aylmer, Montreal, QC", price: 2600 },
  { id: "3", address: "3636 Rue Clark, Montreal, QC", price: 1300 },
  { id: "4", address: "235 Rue Sherbrooke, Montreal, QC", price: 1680 },
  { id: "5", address: "350 Boul. De Maisonneuve, Montreal, QC", price: 1700 },
];

export default function Liked() {
  return (
    <div className="liked-container">
      <h1 className="liked-title">Liked Houses</h1>

      <div className="liked-list">
        {likedHouses.map((house, index) => (
          <div key={house.id} className={`liked-card ${index === 0 ? "liked-card-first" : ""}`}>
            <div>
              <h2 className="liked-address">{house.address}</h2>
              <p className="liked-price">${house.price}/Monthly</p>
            </div>

            {/* Match or Pending Icons */}
            {index === 0 ? (
              <div className="liked-status liked-match">
                <CheckCircle className="liked-icon" /> Match
              </div>
            ) : (
              <div className="liked-status liked-pending">
                <Hourglass className="liked-icon" /> Pending
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

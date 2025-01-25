interface HouseCardProps {
    image: string;
  }
  
  export default function HouseCard({ image }: HouseCardProps) {
    return (
      <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex items-center justify-center">
        <img
          src={image}
          alt="House"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    );
  }
  
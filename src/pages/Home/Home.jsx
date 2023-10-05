import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../Slider/Slider";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const [index, setIndex] = useState(0);
  const { places, bookingPlace } = useContext(AuthContext);

  const handleIndex = (idx) => {
    setIndex(idx);
  };

  const handleBooking = (place) => {
    bookingPlace(place);
  };

  return (
    <div
      className="min-h-screen bg-[#000000b3] bg-cover bg-center bg-blend-overlay px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${places[index]?.img})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="grid md:grid-cols-7 gap-10 py-10">
          <div className="md:col-span-3">
            <h1 className="text-5xl lg:text-6xl text-white uppercase">
              {places[index]?.name}
            </h1>
            <p className="text-white pt-5 text-justify">
              {places[index]?.description}
            </p>
            <Link to="/booking">
              <button
                className="flex items-center gap-1 py-3 px-6
             bg-[#F9A51A] font-medium text-black rounded-md mt-6"
                onClick={() => handleBooking(places[index])}
              >
                Booking <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
          <div className="md:col-span-4 relative min-h-[480px]">
            <Slider places={places} handleIndex={handleIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

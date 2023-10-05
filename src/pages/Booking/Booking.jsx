import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthProvider";

const Booking = () => {
  const { booking } = useContext(AuthContext);
  return (
    <div
      className="min-h-screen bg-[#000000b3] bg-cover bg-center bg-blend-overlay px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${booking?.img})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex py-32">
          <div className="md:col-span-3 max-w-full md:max-w-[505px] border">
            <h1 className="text-5xl lg:text-6xl text-white uppercase">
              {booking?.name}
            </h1>
            <p className="text-white pt-5 text-justify">
              {booking?.description}
            </p>
          </div>
          <div>
            <button className="text-black font-medium px-10 py-4 rounded-md bg-[#F9A51A]">
              Start Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

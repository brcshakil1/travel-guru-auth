import { PropTypes } from "prop-types";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Slider = ({ places, handleIndex }) => {
  const [slide, setSlide] = useState(0);

  const handleSlideNext = () => {
    setSlide(slide - 1);
    if (slide < 1) {
      setSlide(places.length - 1);
    }
  };

  const handleSlidePrev = () => {
    setSlide(slide + 1);
    if (slide > places.length - 2) {
      setSlide(0);
    }
  };

  const handle2ndSide = () => {
    return slide + 1 > places.length - 1 ? 0 : slide + 1;
  };
  const handle3rdSide = () => {
    if (slide === 0) {
      return 2;
    } else if (slide === 1) {
      return 3;
    } else if (slide === 2) {
      return 0;
    } else {
      return 1;
    }
  };

  return (
    <div className="static md:absolute">
      <div className="flex flex-col md:flex-row gap-7 ">
        <div
          className="w-full md:w-[270px] h-[417px] rounded-xl bg-cover bg-blend-overlay border-4 border-yellow-500"
          style={{
            backgroundImage: `url(${places[slide]?.img}), linear-gradient(0deg, #000 0.1%, rgba(0, 0, 0, 0.00) 40.96%)            `,
          }}
        >
          <div className="w-full relative">
            <h2 className="uppercase text-3xl text-white absolute top-[340px] left-4 z-50">
              {places[slide]?.name}
            </h2>
          </div>
        </div>
        <div
          className="w-full md:w-[270px] h-[417px] rounded-xl bg-cover bg-blend-overlay hidden md:block"
          style={{
            backgroundImage: `url(${
              places[handle2ndSide()]?.img
            }), linear-gradient(0deg, #000 0.1%, rgba(0, 0, 0, 0.00) 69.96%)`,
          }}
        >
          <div className="w-full relative">
            <h2 className="uppercase text-3xl text-white absolute top-[340px] left-4 z-50">
              {places[handle2ndSide()]?.name}
            </h2>
          </div>
        </div>
        <div
          className="w-full md:w-[270px] h-[417px] rounded-xl bg-cover bg-blend-overlay hidden md:block"
          style={{
            backgroundImage: `url(${
              places[handle3rdSide()]?.img
            }), linear-gradient(0deg, #000 0.1%, rgba(0, 0, 0, 0.00) 69.96%)`,
          }}
        >
          <div className="w-full relative">
            <h2 className="uppercase text-3xl text-white absolute top-[340px] left-4 z-50">
              {places[handle3rdSide()]?.name}
            </h2>
          </div>
        </div>
      </div>
      <div className=" text-center flex gap-2 w-[100px] mt-3">
        <button
          onClick={() => {
            handleSlidePrev();
            handleIndex(slide + 1 > places.length - 1 ? 0 : slide + 1);
          }}
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <GrFormPrevious className="text-xl " />
        </button>
        <div
          onClick={() => {
            handleSlideNext();
            handleIndex(slide - 1 < 0 ? places.length - 1 : slide - 1);
          }}
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <GrFormNext className="text-xl " />
        </div>
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  places: PropTypes.array,
  handleIndex: PropTypes.func,
};

import React, { useState, useEffect } from "react";
import leftArrow from "../assets/arrowLeft.svg";
import rightArrow from "../assets/arrowRight.svg";
import symbol from "../assets/symbol.svg";
 
const images = [
 "/banner1.jpg",
    "/banner3.jpg",
   "/banner5.jpg",
   "/banner4.jpg",
  "/banner2.jpg",
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full font-inter h-[797px] overflow-hidden" id="header">
      {/* Image Slider */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Dark Gradient Shadows (Top & Bottom) */}
      <div className="absolute top-0 left-0 w-full h-[161px] bg-gradient-to-b from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[161px] bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50  rounded-full "
      >
        <img src={leftArrow} alt="Left Arrow" className="h-10 w-10" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2  bg-black/50 rounded-full"
      >
        <img src={rightArrow} alt="Right Arrow" className="h-10 w-10" />
      </button>

      {/* Number Indicator (Bottom Left) */}
      <div className="absolute bottom-36 lg:bottom-10 font-forum text-[38px] mb-10 
        lg:left-28 left-1/2 transform -translate-x-1/2 lg:translate-x-0 
        text-white flex items-center gap-10">
        
        {currentIndex + 1} 
        <div className="h-[2.5px] bg-white w-[225px]" />
        {images.length}
      </div>


      {/* Absolute Box Card (Bottom Right) */}
      <div className="absolute bottom-10 right-6 bg-white-card  px-3 sm:ml-0 ml-10  rounded-lg shadow-lg flex items-center gap-5 max-w-[571px] h-[125px]">
          <img src={symbol} className="w-[40px] h-[40px]" alt="" />
          <div>
              <h3 className="font-bold text-[20px] text-black line-clamp-1  ">Evans optimistic after Rallye Monte-Carlo podium</h3>
              <p className="text-white text-[18px] flex-wrap line-clamp-3">Toyota driver Elfyn Evans emerged from last week’s Rallye Monte-Carlo with his equal best result of second place on the event</p>
          </div>
      </div>
    </div>
  );
};

export default Header;

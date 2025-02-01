 
import { races } from "../constants/races";
import React, { useRef, useState, useEffect } from "react";
import { Bell, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import TpRightArrwWhite from "../assets/TpRightArrwWhite.svg";
import TpRightArrwBlack from "../assets/TpRightArrwBlack.svg";
 


export default function NewsSection() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      setShowRightArrow(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
      return () => scrollElement.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);
  

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white pt-20 py-12  flex flex-col gap-6 items-center  relative " id="races">
         <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-semibold font-numans">Races & schedules</h2>
                <button className="px-10 py-2 bg-transparent group border border-primary text-primary rounded-full hover:translate-x-1  flex transition-transform items-center gap-5">
                          <h3>View All</h3> 
                          <img src={TpRightArrwWhite} className='dark:block hidden w-[14px] h-[14px] md:w-[17px] md:h-[17px] group-hover:rotate-90 transition-transform' alt="" />
                          <img src={TpRightArrwBlack} className='dark:hidden w-[14px] h-[14px]  md:w-[17px] md:h-[17px] group-hover:rotate-90 transition-transform'      alt="" />
              </button>
         </div>
      <div className="relative  flex items-center mt-8 max-w-5xl mx-auto w-full">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-3 sm:left-10  xl:left-0 z-10 bg-[#747475]  border p-2 rounded-full"
          > 
            <ChevronLeft size={24} color="white" />
          </button>
        )}
        <div ref={scrollRef} className=" flex gap-6 pb-10 overflow-x-auto scrollbar-hide  px-2" style={{scrollbarWidth: '0px', }}>
          {races.map((news, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-lgApprach_card dark:bg-lgBackgroundDark2  text-black dark:text-white w-80 rounded-lg overflow-hidden shadow-lg flex-shrink-0  "
            >
              <div className="relative">
              <img
                  src={news.image}
                  alt={news.title}
                  width={320}
                  height={180}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

              
              </div>

              <div className="p-4 flex flex-col relative gap-5">
                  <div>
                      <h3 className="text-lg font-numans">{news.title}</h3>
                      <p className="text-[18px] text-gray-800 dark:text-gray-200 font-forum ">{news.date}</p>
                       
                  </div>

                  <span className="absolute top-4 right-3 bg-[#2C2B2B] p-2 rounded-full">
                    <Bell size={16} color="gold" />
                  </span>

                  <h3 className="text-[16px] text-gray-800 dark:text-gray-400 font-inter">{news.countdown}</h3>

                  <button
                    className=" w-full flex justify-between items-center border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black transition"
                  >
                    See More Details <ArrowRight size={16} />
                  </button>
              </div>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-3 sm:right-10 xl:right-0 z-10 bg-[#747475] border p-2 rounded-full"
          >
            <ChevronRight size={24} color="white"  />
          </button>
        )}
      </div>
    </div>
  );
}

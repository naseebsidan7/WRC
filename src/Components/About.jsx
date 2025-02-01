import React from "react";
import TpRightArrwWhite from "../assets/TpRightArrwWhite.svg";
import TpRightArrwBlack from "../assets/TpRightArrwBlack.svg";
 

const About = () => {
  return (
    <div className="dark:bg-black bg-white text-black dark:text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="flex justify-between items-center font-numans">
            <h2 className="text-4xl font-bold mb-6  ">About WRC</h2>
           
           <button className="px-10 py-2 bg-transparent group border border-primary text-primary rounded-full hover:translate-x-1  flex transition-transform items-center gap-5">
               <h3>Know More</h3> 
               <img src={TpRightArrwWhite} className='dark:block hidden w-[14px] h-[14px] md:w-[17px] md:h-[17px] group-hover:rotate-90 transition-transform' alt="" />
               <img src={TpRightArrwBlack} className='dark:hidden w-[14px] h-[14px]  md:w-[17px] md:h-[17px] group-hover:rotate-90 transition-transform'      alt="" />
           </button>
        </div>
        {/* Description */}
        <p className="text-lg  dark:text-gray-300 leading-relaxed mb-10">
          The World Rally Championship (WRC) is the highest level of
          international rally competition, organized by the Fédération
          Internationale de l'Automobile (FIA) since 1973. It features top rally
          cars, world-class drivers, and extreme racing conditions across
          diverse terrains like snow, gravel, and asphalt.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <h3 className="text-3xl font-bold text-primary">13+</h3>
            <p className="bg-linearGradient_text text-gradient">International Rallies</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">50+</h3>
            <p className="bg-linearGradient_text text-gradient">Global Viewers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">150+</h3>
            <p className="bg-linearGradient_text text-gradient">WRC Drivers Competing</p>
          </div>
        </div>

        {/* Know More Button */}

       
      </div>
    </div>
  );
};

export default About;

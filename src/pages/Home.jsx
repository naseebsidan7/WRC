import About from "../Components/About";
import CTA from "../Components/CTA";
import News from "../Components/News";
import RaceSchedules from "../Components/RaceSchedules";
import Standings from "../Components/Standings";

 
const Home = () => {
  return (
    <div className="bg-gray-900 text-white max-w-6xl mx-auto">
    
       
        <About />
        <RaceSchedules />
        <Standings />
        <News />
        <CTA />
  
    </div>
  );
};

export default Home;

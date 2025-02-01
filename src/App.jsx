import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
  
import AllStandings from "./pages/AllStandings";
import Races from "./pages/Races";
import Home from "./pages/Home";
  
import AllNews from "./pages/AllNews";
import Loader from "./Components/elements/Loader";
 
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 100); // Change time if needed
    }, []);

    // Show the Loader component if loading is true
    if (loading) {
      return <Loader />;
    }

    return (
      <Router>
        <Navbar />
          <HeroSection />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/races" element={<Races />} />
            <Route path="/standings" element={<AllStandings />} />
            <Route path="/news" element={<AllNews />} />
          </Routes>
        <Footer />
      </Router>
    );
}

export default App;

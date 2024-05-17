
import { useEffect, useState } from "react";
import './App.css';
import './assets/css/style.css'
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

const App = () => {
  let heroData = [
    { text1: "Crime Analysis", text2: "and Preduction System" },
    { text1: "Crime Analysis", text2: "and Preduction System" },
    { text1: "Crime Analysis", text2: "and Preduction System" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Home />
      <Footer />
    </div>
    
  );
};
export default App;

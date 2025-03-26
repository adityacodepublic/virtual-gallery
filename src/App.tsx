import { VideoCarousel } from "./components/Carousel";
import Curson from "./components/Curson";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="w- h-full">
      <Curson />
      <HeroSection />
      <VideoCarousel />
      <footer className="w-full text-center pt-3  bg-[#f5f0e6]">
        {new Date().getFullYear()} Quantum Coders.
      </footer>
    </div>
  );
}

export default App;

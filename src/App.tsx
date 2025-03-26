import { CarouselDemo } from "./components/CarouselDemo";
import Curson from "./components/Curson";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="w- h-full">
      <Curson />
      <HeroSection />
      <CarouselDemo />
      <footer className="w-full text-center py-1 bg-[#f5f0e6]">
        © {new Date().getFullYear()} Quantum Coders. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

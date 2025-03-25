import { CarouselDemo } from "./components/CarouselDemo";
import Cursor from "./components/Curson";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="w- h-full">
      <Cursor />
      <HeroSection />
      <CarouselDemo />
      <footer className="w-full text-center py-4 bg-[#f5f0e6]">
        © {new Date().getFullYear()} Quantum Coders. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

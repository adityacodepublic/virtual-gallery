import Navbar from "./components/Navbar";
import video from "./assets/videoplayback.webm";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <video
        className=" w-full h-full object-cover fixed top-0 left-0"
        src={video}
        autoPlay
        loop
        muted
      />
      <HeroSection />
    </div>
  );
}

export default App;

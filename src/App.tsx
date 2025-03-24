import Navbar from "./components/Navbar";
import video from "./assets/videoplayback.webm";
import HeroSection from "./components/HeroSection";
import { useEffect, useRef } from "react";
import GlassButton from "./components/ui/glassButton/glass-button";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <video
        className=" w-full h-full object-cover fixed top-0 left-0"
        src={video}
        autoPlay
        loop={false} // we'll control looping manually
        muted
        ref={videoRef}
        onTimeUpdate={() => {
          if (videoRef.current && videoRef.current.currentTime >= 26) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }}
      />
      <GlassButton>Hi there</GlassButton>

      <HeroSection />
    </div>
  );
}

export default App;

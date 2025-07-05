import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function Globe() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main className="w-screen h-screen bg-[#bbddfd]">
      <Spline scene="https://prod.spline.design/375Ev6WouaPTJhwS/scene.splinecode" />
      <div className="fixed bottom-0 right-0 w-[160px] h-[70px] bg-[#bbddfd] z-50"></div>
    </main>
  );
}

import Spline from "@splinetool/react-spline";

export default function Globe() {
  return (
    <main className="w-screen h-screen">
      <Spline scene="https://prod.spline.design/375Ev6WouaPTJhwS/scene.splinecode" />
      <div className="fixed bottom-0 right-0 w-[160px] h-[70px] bg-[#bbddfd] z-50"></div>
    </main>
  );
}

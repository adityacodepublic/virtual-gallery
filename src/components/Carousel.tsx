"use client";
import Carousel from "@/components/ui/carousel";

export function VideoCarousel() {
  const slideData = [
    {
      title: "The Enchanted Peaks",
      button: "Take a Tour",
      src: "https://static.mused.org/netherworld_egypt_homepage_intro_cx.mp4",
      go: "https://mused.com/guided/438/great-sphinx/",
    },
    {
      title: "Metropolitan Dreams",
      button: "Discover More",
      src: "https://static.mused.org/project_videos/sardis_intro_compressed.mp4",
      go: "https://mused.com/sardis/",
    },
    {
      title: "Illuminated Nights",
      button: "Be There Now",
      src: "https://static.mused.org/project_videos/copan_cover_intro_web_NRzDKNe.mp4",
      go: "https://mused.com/copan/",
    },
    {
      title: "Whispers of the Dunes",
      button: "See Collection",
      src: "https://static.mused.org/project_videos/giza-cairo-drone.mp4",
      go: "https://mused.com/giza/",
    },
  ];

  return (
    <div className="relative bg-[#f5f0e6] overflow-hidden w-full h-full py-20 ">
      <h1 className="font-serif pb-8 font-medium text-5xl text-center text-[#1d1d1d]">
        Explore The Places
      </h1>
      <Carousel slides={slideData} />
    </div>
  );
}

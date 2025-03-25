"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "The Enchanted Peaks",
      button: "View Artwork",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAmwJL2qmtQz2qACgjJVpHSKSpMp7scvQ7w&s",
      go: "https://en.wikipedia.org/wiki/Indian_art#Contemporary_art_(c._1900_CE-present)",
    },
    {
      title: "Metropolitan Dreams",
      button: "Discover More",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E3UHhFai3KjQKhouI4GYL2YNcYCm7Fp66Q&s",
      go: "https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art",
    },
    {
      title: "Illuminated Nights",
      button: "Explore Gallery",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5H9bXOeP1-ks7-es_IFCxwkiZxAg20-9Mg&s",
      go: "https://www.britannica.com/topic/The-Starry-Night",
    },
    {
      title: "Whispers of the Dunes",
      button: "See Collection",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7WwSedUIDcYThWjtl0VShe3kofbbH4KJmw&s",
      go: "https://en.wikipedia.org/wiki/Art_of_Rajasthan",
    },
  ];

  return (
    <div className="relative bg-[#f5f0e6] overflow-hidden w-full h-full py-20 ">
      <h1 className="font-serif pb-5 font-medium text-4xl text-center text-[#1d1d1d]">
        Explore The Art
      </h1>
      <Carousel slides={slideData} />
    </div>
  );
}

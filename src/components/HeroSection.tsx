import { Link } from "react-router";
import { Search, Menu } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[#f5f0e6] min-h-screen w-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-serif text-xl tracking-wide">LEO ART</div>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="uppercase text-sm font-medium text-black hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="uppercase text-sm font-medium text-black hover:text-gray-700"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="uppercase text-sm font-medium text-black hover:text-gray-700"
          >
            Gallery
          </Link>
          <Link
            to="/arts"
            className="uppercase text-sm font-medium text-black hover:text-gray-700"
          >
            Arts
          </Link>
          <Link
            to="/about"
            className="uppercase text-sm font-medium text-black hover:text-gray-700"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="uppercase text-sm font-medium text-black hover:text-gray-700"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-7 h-7" />

          <button aria-label="Menu" className="bg-black rounded-full p-1">
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-9">
            <div className="relative">
              {/* Hero headline */}
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight">
                <span className="font-bold">LET ART</span>
                <br />
                <span className="inline-block relative">
                  <span className="relative z-10 font-bold lg:text-8xl">
                    CARESS
                  </span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#e9d18c] rounded-full -z-10 opacity-80"></div>
                </span>{" "}
                <span className="font-bold">YOUR</span>
                <br />
                <span>SOUL</span>
              </span>

              {/* Circular avatars and sun icon */}
              <div className="absolute top-2 right-24 hidden lg:block">
                <div className="relative">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#f5f0e6] overflow-hidden bg-gray-300">
                      <img
                        src="https://media.istockphoto.com/id/2154054192/photo/teacher-and-students-engaged-in-canvas-painting.webp?a=1&b=1&s=612x612&w=0&k=20&c=i0FVgacY7ClZU0beB2ghE8WdUTT9RemW5pvTrWfgT-8="
                        width={48}
                        height={48}
                        alt="Artist"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#f5f0e6] overflow-hidden bg-gray-300">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1674814950019-b29545fea7a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aXN0fGVufDB8fDB8fHww "
                        width={48}
                        height={48}
                        alt="Artist"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#f5f0e6] overflow-hidden bg-gray-300">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ksTA-rxs3xOzgqyeuHYmFOK25UmpQPbumA&s"
                        width={48}
                        height={48}
                        alt="Artist"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -right-16 -top-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-[#f5f0e6]">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-full h-full text-[#c4d1bc]"
                        >
                          <path
                            d="M50 0 Q 60 40 100 50 Q 60 60 50 100 Q 40 60 0 50 Q 40 40 50 0"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs">+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs max-w-[150px]">
                  More Than 1000 Works Of Art From Different Periods Of History
                </div>
              </div>

              {/* Ticket section */}
              <div className=" flex flex-col md:flex-row items-start gap-4 mt-8">
                <div className="bg-black text-white px-4 py-2 rounded-md">
                  <div className="text-sm">Oct</div>
                  <div className="text-2xl font-bold">0023</div>
                  <div className="text-xs">Visit Tickets Left</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    You Can Book Your Ticket
                    <br />
                    For Visit Now
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-bold">Get Ticket</div>
                    <div className="relative">
                      <svg
                        width="70"
                        height="35"
                        viewBox="0 0 70 35"
                        className="fill-[#e9d18c] transform rotate-12"
                      >
                        <path d="M0,0 L70,0 L65,35 L5,35 Z" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-cursive rotate-12">
                        Premium
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search bar */}
              <div className="mt-12 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Discover Leonardo Work"
                    className="w-full py-3 pl-4 pr-12 rounded-full border border-gray-300 bg-white"
                  />
                  <Search className="absolute top-3 right-4" />
                </div>
              </div>

              {/* Featured artwork */}
              <div className="mt-8 max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <button className="bg-black text-white text-xs px-3 py-1 rounded-md">
                    Explore
                  </button>
                  <span className="text-xs text-gray-600">News</span>
                </div>
                <h2 className="text-xl font-medium mb-4">
                  Copies And Derivations Of The Last Supper ...
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                    <img
                      src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aXN0fGVufDB8fDB8fHww "
                      width={48}
                      height={48}
                      alt="Leonardo Da Vinci"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Leonardo Da Vinci</div>
                    <div className="text-xs text-gray-600">25 Major Works</div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src="data:image/jpeg;base64,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"
                    width={550}
                    height={300}
                    alt="The Last Supper"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-3">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
                  Online Exhibition
                </button>
              </div>
              <div className="bg-[#e9d18c] rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
                <div className="mb-4">
                  <div className="text-sm font-medium">Since</div>
                  <div className="text-6xl font-serif">1481</div>
                </div>
                <div className="text-sm mb-8 max-w-[200px]">
                  See The Most Influential And Famous Paintings In The World
                  Here
                </div>
                <div className="mt-auto">
                  <div className="relative">
                    <div className="text-[120px] font-serif leading-none tracking-tighter">
                      1968
                    </div>
                    {/* Barcode-like design */}
                    <div className="absolute bottom-0 right-0 w-16 h-full flex flex-col justify-end">
                      <div className="flex flex-col space-y-0.5">
                        {Array(15)
                          .fill(0)
                          .map((_, i) => (
                            <div
                              key={i}
                              className="h-0.5 w-full bg-black"
                            ></div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-black pt-2 flex justify-between items-center">
                    <div className="text-xs tracking-widest">IIIIIIIIIIII</div>
                    <div className="text-xs">0000000000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

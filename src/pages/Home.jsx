import React from "react";
import homeBg from "/images/anime-moon-landscape.jpg";
import AnimeCard from "../components/AnimeCard";

function Home() {
  return (
    <div className="flex-col flex h-full w-full">
      <div className="h-screen w-full relative">
        <div className="h-screen w-full ">
          <img src={homeBg} alt="" className="h-full object-cover w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="h-full left-0 absolute w-full top-0 flex items-center">
          <div className="container  w-full mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  Spotlight
                </span>
              </div>

              <h1 className="inline-block bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f472b6] bg-clip-text text-transparent font-bold text-5xl md:text-7xl mb-4">
                Naruto
              </h1>

              <div className="flex items-center space-x-4 mb-6 text-gray-300">
                <div className="flex items-center">
                  {/* <Star className="w-4 h-4 text-yellow-400 mr-1" /> */}
                  <span>9.2</span>
                </div>
                <span>2002</span>
                <span>24m</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">
                  PG-13
                </span>
              </div>

              <p className="text-white text-lg mb-8 leading-relaxed">
                A young ninja dreams of becoming the strongest in his village,
                facing challenges and uncovering secrets of his past.
              </p>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                  <span>Watch Now</span>
                </button>

                <button className="flex items-center space-x-2 bg-gray-800/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 backdrop-blur-sm">
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid container dark:bg-(--dark-background-primary) bg:(--light-background-primary) lg:py-10 md:py-8 py-4 w-full mx-auto lg:gap-10 md:gap-8 gap-4  lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </div>
  );
}

export default Home;

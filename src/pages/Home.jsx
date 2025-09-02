import React, { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import axiosClient from "../services/axiosClient";

// Sample anime data for the carousel

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselData, setCarouselData] = useState([]);
  const [actionData, setActionData] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/anime")
      .then((data) => {
        // console.log(JSON.stringify(data,null,3))
        setCarouselData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching anime", error);
      });
  }, []);

  useEffect(() => {
    axiosClient
      .get("/anime?genres=1")

      .then((data) => {
        console.log(JSON.stringify(data, null, 3));
        setActionData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching anime", error);
      });
  }, []);

  // console.log(carouselData)
  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentAnime = carouselData[currentSlide];
  if (!currentAnime) {
    return <div>Loading...</div>;
  }
  console.log(JSON.stringify(currentAnime, null, 3));

  return (
    <div className="flex-col bg-gray-900 flex h-full w-full">
      {/* Carousel */}
      <div
        className="h-screen w-full relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Images */}
        <div className="absolute inset-0">
          {carouselData.map((anime, index) => (
            <div
              key={anime.mal_id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${anime.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container w-full mx-auto px-4">
            <div className="max-w-2xl">
              {/* Spotlight Badge */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {/* {currentAnime.spotlight} */}
                  #1
                </span>
              </div>

              {/* Title */}
              <h1 className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 bg-clip-text text-transparent font-bold text-5xl md:text-7xl mb-4 animate-pulse">
                {currentAnime.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center space-x-4 mb-6 text-gray-300">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{currentAnime.score}</span>
                </div>
                <span>{currentAnime.year}</span>
                <span>{currentAnime.duration}</span>
                <span className="px-2 py-1 bg-gray-800/80 rounded text-xs backdrop-blur-sm">
                  {currentAnime.rating}
                </span>
              </div>

              {/* Description */}
              <p className="text-white text-lg mb-8 leading-relaxed opacity-90">
                {currentAnime.description}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  {/* <Play className="w-5 h-5" /> */}
                  <span>Watch Now</span>
                </button>

                <button className="flex items-center space-x-2 bg-gray-800/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500">
                  {/* <Info className="w-5 h-5" /> */}
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
        >
          {/* <ChevronLeft className="w-6 h-6" /> */}
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
        >
          {/* <ChevronRight className="w-6 h-6" /> */}
          Next
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-500 w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-4 right-4 z-20">
          <div
            className={`w-2 h-2 rounded-full ${
              isAutoPlaying ? "bg-green-400" : "bg-gray-400"
            } animate-pulse`}
          />
        </div>
      </div>

      {/* Anime Grid */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-2xl font-bold mb-8">Action</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3">
            {actionData.map((movie) => (
              <AnimeCard
                key={movie.mal_id} 
                title={movie.title}
                year={movie.year}
                runtime={movie.duration}
                rating={movie.score}
                type={movie.type}
                image={movie.images.webp.large_image_url}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

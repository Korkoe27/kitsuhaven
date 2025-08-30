import React from 'react'
import actor from '/images/card2.jpg'
// import animeBg from '/images/anime-moon-landscape.jpg'
// import Header from '../components/Header'
import { Link } from 'react-router-dom'

function AnimeDetails() {
  return (
     <div className="min-h-screen bg-gray-900">
      {/* <Header /> */}
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Link to="/search" className="hover:text-white">Movies</Link>
          <span>/</span>
          <span className="text-white">Kyewaa</span>
          {/* <span className="text-white">{movie.title}</span> */}
        </div>
      </div>



      <div className="container mx-auto px-4 pb-12">
        <div className="flex">
          {/* Movie Poster and Actions */}
          <div className="flex-col flex text-white">
            <h4 className="">Episode List:</h4>
            <div className="flex">
              <span className="">EPS: 1-20</span>
              <input type="search" className="" placeholder='Enter episode number' />
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
              <span className="border-1 p-2 w-fit">001</span>
            </div>
          </div>

          <section className="w-full bg-red-500">
            <h2 className="text-white">Episode 1: Say my Name</h2>
              <img
                src={actor}
                // src={movie.poster}
                alt='Episode thumbnail'
                // alt={movie.title}
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
              

          </section>


          <div className="">
            <div className="">
              <img
                src={actor}
                // src={movie.poster}
                alt='Test'
                // alt={movie.title}
                className="w-full max-w-sm rounded-lg shadow-2xl mb-6"
              />
              
              <div className="flex flex-col space-y-3 max-w-sm">
                <button className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors">
                  {/* <Play className="w-5 h-5" /> */}
                  <span>Watch Trailer</span>
                </button>
                
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors">
                    {/* <Bookmark className="w-4 h-4" /> */}
                    <span>Watchlist</span>
                  </button>
                  
                  <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors">
                    {/* <Share2 className="w-4 h-4" /> */}
                    Share
                  </button>
                </div>
              </div>
            </div>
                      {/* Movie Details */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-white mb-4">One Piece</h1>
              {/* <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1> */}
              
              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                <div className="flex items-center">
                  {/* <Calendar className="w-4 h-4 mr-1" /> */}
                  <span>2019</span>
                  {/* <span>{movie.year}</span> */}
                </div>
                <div className="flex items-center">
                  {/* <Clock className="w-4 h-4 mr-1" /> */}
                  <span>20min</span>
                  {/* <span>{movie.runtime}</span> */}
                </div>
                <span className="bg-gray-800 px-2 py-1 rounded text-sm">
                    {/* {movie.rated} */}
                    
                </span>
                <div className="flex items-center">
                  {/* <Star className="w-4 h-4 text-yellow-400 mr-1" /> */}
                  <span>5/10</span>
                  {/* <span>{movie.rating}/10</span> */}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {/* {movie.genre.map((genre) => ( */}
                  <span
                    // key={genre}
                    className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {/* {genre} */}
                    Comedy
                  </span>
                {/* ))} */}
              </div>
            </div>

            {/* Plot Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Plot Summary</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {/* {movie.plot} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia dicta nulla ipsam quam a, incidunt voluptates, reiciendis tenetur maxime illum dolor in facilis nesciunt sunt commodi minima ipsum quidem.
              </p>
            </div>

            {/* Cast */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {/* {cast.map((actor, index) => ( */}
                  <div className="text-center">
                  {/* <div key={index} className="text-center"> */}
                    <img
                      src={actor}
                      alt="Actor"
                    //   src={actor.image}
                    //   alt={actor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                    />
                    {/* <h3 className="text-white font-medium text-sm">{actor.name}</h3> */}
                    <h3 className="text-white font-medium text-sm">Jim Iyke</h3>
                    <p className="text-gray-400 text-xs">Kakashi</p>
                    {/* <p className="text-gray-400 text-xs">{actor.character}</p> */}
                  </div>
                {/* ))} */}
              </div>
            </div>

            {/* Ratings */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Ratings</h2>
              <div className="flex items-start space-x-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">
                    9.3
                    {/* {movie.rating} */}
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {/* {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))} */}
                    *
                    {/* <Star className="w-4 h-4" /> */}
                  </div>
                  <div className="text-gray-400 text-sm">
                    20 reviews
                    {/* {movie.votes.toLocaleString()} reviews */}
                  </div>
                </div>
                
                <div className="flex-1 max-w-md">
                  {/* {ratingDistribution.map((rating) => ( */}
                    <div  className="flex items-center space-x-3 mb-2">
                    {/* <div key={rating.stars} className="flex items-center space-x-3 mb-2"> */}
                      <span className="text-gray-400 text-sm w-2">
                        {/* {rating.stars} */}
                      </span>
                      <div className="flex-1 bg-gray-800 h-2 rounded">
                        <div
                          className="bg-yellow-400 h-2 rounded"
                        //   style={{ width: `${rating.percentage}%` }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm w-8">
                        50%
                        {/* {rating.percentage}% */}
                      </span>
                    </div>
                  {/* ))} */}
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Movie Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="text-gray-400 w-20">Director:</span>
                    <span className="text-white">Maxwell Armah</span>
                    {/* <span className="text-white">{movie.director.join(', ')}</span> */}
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-20">Stars:</span>
                    <span className="text-white">Korkoe Dumashie</span>
                    {/* <span className="text-white">{movie.actors.join(', ')}</span> */}
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-20">Genre:</span>
                    <span className="text-white">Action</span>
                    {/* <span className="text-white">{movie.genre.join(', ')}</span> */}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AnimeDetails

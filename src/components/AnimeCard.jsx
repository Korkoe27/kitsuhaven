import React from 'react'
import { Link } from 'react-router-dom'
import cardImg from '/images/card.jpg';

function AnimeCard() {
  return (
 <Link 
    //   to={`/movie/${movie.id}`}
    to={'/anime'}
      className="group block overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={cardImg}
          alt="Card"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* {showDetails && ( */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2">
              {/* {movie.title} */}
                Naruto
            </h3>
            
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <div className="flex items-center">
                {/* <Calendar className="w-3 h-3 mr-1" /> */}
                {/* {movie.year} */}
                1999
              </div>
              <div className="flex items-center">
                {/* <Clock className="w-3 h-3 mr-1" /> */}
                {/* {movie.runtime} */}
                23m
              </div>
            </div>
            
            <div className="flex items-center mt-2">
              {/* <Star className="w-3 h-3 text-yellow-400 mr-1" /> */}
              <span className="text-xs text-white">
                {/* {movie.rating} */}
                9/10
                </span>
            </div>
          </div>
        {/* )} */}

        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {/* {movie.rating} */}
            PG-13
        </div>
      </div>
    </Link>
  )
}

export default AnimeCard

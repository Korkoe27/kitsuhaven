import React from 'react'
import { Link } from 'react-router-dom'
import indexbg from '/images/index-bg.jpg'

const Dashboard = () => {
  return (
    <div className='h-svh w-full flex justify-center items-center bg-cover bg-center' style={{backgroundImage: `url(${indexbg})`}}>
    <main className="flex-col flex m-auto">
      <div className="">
        <article className="">
        <h1 className="text-xl md:text-4xl text-center lg:text-6xl xl:text-8xl font-bold text-white">
          Explore the World of 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Anime
            </span>
          
        </h1>
        <p className="text-xl md:text-lg lg:text-xl xl:text-2xl text-center text-white max-w-2xl mx-auto">
          Track your favorite anime titles and discover new ones with detailed information, ratings, and reviews.
        </p>
        </article>
        <aside className="flex-col flex mx-auto justify-center items-center">
          <form className="flex items-center bg-gray-900/70 backdrop-blur-sm rounded-full p-2 border border-gray-700">
            <input 
            type="search" 
            name="" 
            className='flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-3 outline-none focus:outline-none'
            placeholder='Search anime...'
            id="" />
            <button type="submit"
            className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3  rounded-full transition-colors duration-200 font-semibold'
            >
              Search..
            </button>
          </form>
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            Top Searches: Action, Adventure, Comedy, Drama, Fantasy, Horror, Romance, Sci-Fi, Slice of Life
          </p>
          <Link to={`home`} className='inline-flex items-center text-center justify-center bg-purple-600 bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 w-fit text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105'>
            Explore Anime
          </Link>
          {/* <Link to={`home`} className='"inline-flex items-center text-center justify-center bg-gradient-to-r  from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-fit text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105'>
            Explore Anime
          </Link> */}
        </aside>
      </div>
    </main>
    </div>
  )
}

export default Dashboard

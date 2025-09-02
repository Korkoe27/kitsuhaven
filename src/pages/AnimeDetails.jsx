// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// import axiosClient from '../services/axiosClient';
// // import { Search, Star, Calendar, Clock, Bookmark, Share2, Play, Info } from 'lucide-react';

// const [actionData, setActionData] = useState([]);
// //action = 1
// useEffect(()=>{
//   axiosClient.get('/anime?genres=1')
//     .then((data)=>{
//       console.log(JSON.stringify(data,null,3))
//     })
//     .catch((error)=>{
//       console.error("Error fetching anime",error)
//     })
// },[]);
// //adventure = 2
// // comedy = 4
// // mystery = 7
// // romance = 22
// // horror = 14
// // sci-fi = 24
// //slice of life = 36
// //sports = 30
// //supernatural = 37
// // isekai = 62
// // shounen = 27

// // Sample anime data
// const animeData = {
//   title: "To Be Hero X",
//   year: "2019",
//   duration: "24m",
//   rating: "PG-13",
//   score: "9.0",
//   genres: ["Action", "Comedy", "Superhero"],
//   description: "This is a world where heroes are created by people's trust, and the hero who has received the most trust is known as 'X'. In this world, people's trust can be calculated by data, and these values will be reflected on everyone's wrist. As long as enough tr...",
//   poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
//   episodes: [
//     { id: 1, title: "Nice", duration: "24:30" },
//     { id: 2, title: "Moon", duration: "23:45" },
//     { id: 3, title: "The ever-standing hero", duration: "24:12" },
//     { id: 4, title: "The commoner", duration: "23:58" },
//     { id: 5, title: "One actor", duration: "24:05" },
//     { id: 6, title: "Two e-souls", duration: "23:40" },
//     { id: 7, title: "Three seats", duration: "24:20" },
//     { id: 8, title: "The cyan girl", duration: "23:55" },
//     { id: 9, title: "Loss and gain", duration: "24:15" },
//     { id: 10, title: "The truth behind luck", duration: "23:50" },
//     { id: 11, title: "Road to the crown", duration: "24:00" },
//     { id: 12, title: "Fall of the star", duration: "24:30" },
//     { id: 13, title: "Tough girl", duration: "23:35" },
//     { id: 14, title: "Impromptu counterattack", duration: "24:10" },
//     { id: 15, title: "Affective disorder", duration: "23:45" },
//     { id: 16, title: "The cure", duration: "24:05" },
//     { id: 17, title: "Whisper flower", duration: "23:50" }
//   ]
// };

// function AnimeDetails() {
//   const [selectedEpisode, setSelectedEpisode] = useState(animeData.episodes[0]);
//   const [episodeSearch, setEpisodeSearch] = useState('');
//   const [episodeRange, setEpisodeRange] = useState('1-20');


// const getFilteredEpisodesByRange = (episodes, range) => {
//   if (range === 'all') return episodes;
  
//   const [start, end] = range.split('-').map(Number);
//   return episodes.filter(ep => ep.id >= start && ep.id <= end);
// };

// // Update your filteredEpisodes logic
// const rangeFilteredEpisodes = getFilteredEpisodesByRange(animeData.episodes, episodeRange);
// const filteredEpisodes = rangeFilteredEpisodes.filter(episode =>
//   episode.id.toString().includes(episodeSearch) ||
//   episode.title.toLowerCase().includes(episodeSearch.toLowerCase())
// );


//   const episodeRanges = [
//   { value: '1-20', label: '1-20' },
//   { value: '21-40', label: '21-40' },
//   { value: '41-60', label: '41-60' },
//   { value: '61-80', label: '61-80' },
//   { value: 'all', label: 'All Episodes' }
// ];

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Breadcrumb */}
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center space-x-2 text-gray-400 text-sm">
//           <Link to="/" className="hover:text-white transition-colors">Home</Link>
//           <span>/</span>
//           <Link to="/anime" className="hover:text-white transition-colors">Anime</Link>
//           <span>/</span>
//           <span className="text-white">{animeData.title}</span>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 pb-12">
//         <div className="grid grid-cols-12 gap-6">
          
//           {/* Left Section - Episode List */}
//           <div className="col-span-12 lg:col-span-3">
//             <div className="bg-gray-800/50 rounded-lg p-4">
//             <div className="flex items-center justify-between mb-4">
//               <h4 className="text-white text-lg font-semibold">Episode List:</h4>
//               <select 
//                 value={episodeRange}
//                 onChange={(e) => setEpisodeRange(e.target.value)}
//                 className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white text-sm focus:border-purple-500 focus:outline-none transition-colors"
//               >
//                 {episodeRanges.map(range => (
//                   <option key={range.value} value={range.value}>
//                     {range.label}
//                   </option>
//                 ))}
//               </select>
//             </div>              
//               {/* Episode Search */}
//               <div className="mb-4">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-gray-300 text-sm">EPS: 1-{animeData.episodes.length}</span>
//                 </div>
//                 <div className="relative">
//                   {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> */}
                  
//                   <input 
//                     type="search" 
//                     className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors" 
//                     placeholder="Search episodes..."
//                     value={episodeSearch}
//                     onChange={(e) => setEpisodeSearch(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* Episode Grid */}
//               <div className="max-h-96 overflow-y-auto custom-scrollbar">
//                 <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2">
//                   {filteredEpisodes.map((episode) => (
//                     <button
//                       key={episode.id}
//                       onClick={() => setSelectedEpisode(episode)}
//                       className={`p-3 rounded-lg border transition-all duration-200 text-center ${
//                         selectedEpisode.id === episode.id
//                           ? 'border-purple-500 bg-purple-600/20 text-purple-300'
//                           : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-600/50'
//                       }`}
//                     >
//                       <div className="text-sm font-semibold">
//                         {episode.id.toString().padStart(3, '0')}
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle Section - Selected Episode Info */}
//           <div className="col-span-12 lg:col-span-6">
//             <div className="bg-gray-800/30 rounded-lg p-6">
//               <h2 className="text-white text-2xl font-bold mb-4">
//                 Episode {selectedEpisode.id}: {selectedEpisode.title}
//               </h2>
              
//               {/* Episode Thumbnail */}
//               <div className="relative mb-6">
//                 <img
//                   src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop"
//                   alt={`Episode ${selectedEpisode.id} thumbnail`}
//                   className="w-full aspect-video rounded-lg object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/20 rounded-lg" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm">
//                     {/* <Info className="w-8 h-8 text-white" /> */}
//                     Info
//                   </div>
//                 </div>
                
//                 {/* Episode Duration */}
//                 <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
//                   {selectedEpisode.duration}
//                 </div>
//               </div>

//               {/* Episode Description */}
//               <div className="mb-6">
//                 <h3 className="text-white text-lg font-semibold mb-3">Episode Description</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   In this episode, our heroes face their greatest challenge yet. The story takes an unexpected turn as secrets from the past are revealed, changing everything they thought they knew about their world.
//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
//                   {/* <Info className="w-5 h-5" /> */}
//                   <span>View Episode Details</span>
//                 </button>
                
//                 <div className="flex gap-3">
//                   <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors">
//                     {/* <Bookmark className="w-4 h-4" /> */}
//                     <span>Watchlist</span>
//                   </button>
                  
//                   <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors">
//                     {/* <Share2 className="w-4 h-4" /> */}
//                     Share
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Anime Synopsis & Details */}
//           <div className="col-span-12 lg:col-span-3">
//             <div className="space-y-6">
              
//               {/* Anime Poster & Quick Actions */}
//               <div className="bg-gray-800/50 rounded-lg p-4">
//                 <img
//                   src={animeData.poster}
//                   alt={animeData.title}
//                   className="w-full rounded-lg shadow-lg mb-4"
//                 />
                
//                 <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors mb-3">
//                   {/* <Play className="w-5 h-5" /> */}
//                   <span>Watch Trailer</span>
//                 </button>

//                 {/* Rating */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center space-x-2">
//                     {/* <Star className="w-5 h-5 text-yellow-400 fill-current" /> */}
//                     <span className="text-white font-bold text-lg">{animeData.score}</span>
//                   </div>
//                   <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
//                     Vote now
//                   </button>
//                 </div>
//               </div>

//               {/* Anime Details */}
//               <div className="bg-gray-800/50 rounded-lg p-4">
//                 <h2 className="text-white text-xl font-bold mb-4">{animeData.title}</h2>
                
//                 {/* Meta Information */}
//                 <div className="space-y-3 mb-4">
//                   <div className="flex items-center space-x-4 text-gray-300 text-sm">
//                     <div className="flex items-center">
//                       {/* <Calendar className="w-4 h-4 mr-1" /> */}
//                       <span>{animeData.year}</span>
//                     </div>
//                     <div className="flex items-center">
//                       {/* <Clock className="w-4 h-4 mr-1" /> */}
//                       <span>{animeData.duration}</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-2">
//                     <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
//                       {animeData.rating}
//                     </span>
//                     <span className="bg-red-600 px-2 py-1 rounded text-xs text-white">
//                       HD
//                     </span>
//                   </div>
//                 </div>

//                 {/* Genres */}
//                 <div className="mb-4">
//                   <div className="flex flex-wrap gap-2">
//                     {animeData.genres.map((genre) => (
//                       <span
//                         key={genre}
//                         className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs"
//                       >
//                         {genre}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Synopsis */}
//                 <div>
//                   <h3 className="text-white font-semibold mb-3">Synopsis</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {animeData.description}
//                   </p>
//                   <button className="text-purple-400 hover:text-purple-300 text-sm mt-2 transition-colors">
//                     + More
//                   </button>
//                 </div>
//               </div>

//               {/* Additional Info */}
//               <div className="bg-gray-800/50 rounded-lg p-4">
//                 <h3 className="text-white font-semibold mb-3">Additional Info</h3>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Status:</span>
//                     <span className="text-white">Ongoing</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Studio:</span>
//                     <span className="text-white">Studio Pierrot</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Episodes:</span>
//                     <span className="text-white">{animeData.episodes.length}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Source:</span>
//                     <span className="text-white">Manga</span>
//                   </div>
//                 </div>
//               </div>

//               {/* User Rating */}
//               <div className="bg-gray-800/50 rounded-lg p-4">
//                 <h3 className="text-white font-semibold mb-3">What do you think about this anime?</h3>
//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-2">
//                     <button className="flex flex-col items-center p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
//                       <span className="text-2xl mb-1">😴</span>
//                       <span className="text-xs text-gray-300">Boring</span>
//                     </button>
//                     <button className="flex flex-col items-center p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
//                       <span className="text-2xl mb-1">😊</span>
//                       <span className="text-xs text-gray-300">Great</span>
//                     </button>
//                     <button className="flex flex-col items-center p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
//                       <span className="text-2xl mb-1">😍</span>
//                       <span className="text-xs text-gray-300">Amazing</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #374151;
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #6B7280;
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #9CA3AF;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default AnimeDetails;
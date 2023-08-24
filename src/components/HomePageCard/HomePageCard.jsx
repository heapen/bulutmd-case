import React from 'react'
import {Link} from 'react-router-dom'

const HomePageCard = ({ title, imageUrl, link }) => {
  return (
    <>
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <Link to="/movies" className="group">
          <div className="relative overflow-hidden bg-black rounded-lg cursor-pointer transition transform group-hover:scale-105">
            <img src="images/Movies.jpg" alt="Movies" className="w-full h-auto group-hover:opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
              <h2 className="text-white text-xl font-semibold">Movies</h2>
            </div>
          </div>
        </Link>
        <Link to="/series" className="group">
          <div className="relative overflow-hidden bg-black rounded-lg cursor-pointer transition transform group-hover:scale-105">
            <img src="/images/Series.jpg" alt="Series" className="w-full h-auto group-hover:opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
              <h2 className="text-white text-xl font-semibold">Series</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default HomePageCard

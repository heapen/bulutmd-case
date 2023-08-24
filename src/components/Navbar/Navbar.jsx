import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <span className="text-red-600">Netflix</span>Clone
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/" className="hover:text-red-600">Home</a>
          <a href="/movies" className="hover:text-red-600">Movies</a>
          <a href="/series" className="hover:text-red-600">Series</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4">
          <a href="/" className="block py-2">Home</a>
          <a href="/movies" className="block py-2">Movies</a>
          <a href="/series" className="block py-2">Series</a>
        </div>
      )}
    </nav>
   </>
  )
}

export default Navbar

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Link ve useNavigate ekledik
import SearchBar from '../SearchBar/SearchBar';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate'ı tanımladık
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
  };

  const isFilmsOrSeriesRoute = location.pathname.includes("/movies") || location.pathname.includes("/series");

  return (
    <>
      <nav className="bg-black py-4 relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
            <span className="text-red-600">Netflix</span>Clone
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/movies" className="hover:text-red-600">Movies</Link>
            <Link to="/series" className="hover:text-red-600">Series</Link>
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
        {isFilmsOrSeriesRoute &&
          <SearchBar onSearch={handleSearch} />}
        {isOpen && (
          <div className="md:hidden bg-black text-white py-4">
            <Link to="/" className="block py-2">Home</Link>
            <Link to="/movies" className="block py-2">Movies</Link>
            <Link to="/series" className="block py-2">Series</Link>
          </div>
        )}
        {isFilmsOrSeriesRoute &&
          <Dropdown onSearch={handleSearch} />}
      </nav>
    </>
  )
}

export default Navbar;

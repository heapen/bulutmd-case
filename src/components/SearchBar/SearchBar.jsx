import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length >= 3 || newSearchTerm.length === 0) {
      onSearch(newSearchTerm);
    }
  };

  return (
    <div className="flex items-center justify-center md:justify-end rounded-md">
      <input
        className="bg-black text-white placeholder-gray-400 outline-none p-2 md:p-3 rounded-md w-full md:w-auto"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

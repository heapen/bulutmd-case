import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.length >= 3) { // if the search term is 3 or more characters long, then search
      onSearch(searchTerm);
    }
    
    if (searchTerm.length == 0 ) { // Restart the search if the search term is empty
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center justify-end rounded-md">
      <input
        className="bg-black text-white placeholder-gray-400 outline-none m-2"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    
    </div>
  );
};

export default SearchBar;
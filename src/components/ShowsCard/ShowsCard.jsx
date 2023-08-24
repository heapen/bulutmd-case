import React, { useState } from 'react';

const ShowsCard = ({ title, description, poster, releaseDate }) => {
    const [hovered, setHovered] = useState(false);

    return (
    <>
    <div
      className={`w-full sm:w-1/2 md:max-w-xs rounded overflow-hidden shadow-lg p-6 ${
        hovered ? 'bg-gray-800' : 'bg-gray-900'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={poster} className="w-full" alt={`${title} Poster`} />
      <div className="px-6 py-4">
        <div className={`font-bold text-white text-xl mb-2 ${hovered ? 'mr-4' : ''}`}>
          {title}
        </div>
        {hovered && <p className="text-white text-base">{description}</p>}
      </div>
      {hovered && (
        <div className="px-6 py-4">
          <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            {releaseDate}
          </span>
        </div>
      )}
    </div>
    </>
    );
};

export default ShowsCard;

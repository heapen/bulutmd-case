import React, { useState } from 'react';

const ShowsCard = ({ title, description, poster, releaseDate }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative w-full sm:w-1/2 md:max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 mx-4 mb-4 ${hovered ? 'hovered' : ''
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={poster} className="w-full" alt={`${title} Poster`} />
      <div
        className={`absolute bottom-0 left-0 right-0 px-4 py-2 ${hovered ? 'show-description' : 'hidden'
          }`}
      >
        <div className="text-white text-xl font-bold mb-2">{title}</div>
        {hovered && <p className="text-white text-base">{description}</p>}
        {hovered && (
          <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mt-2">
            {releaseDate}
          </span>
        )}
      </div>
    </div>
  );
};

export default ShowsCard;

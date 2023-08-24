import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ShowsCard from '../components/ShowsCard/ShowsCard';
import { useSelector } from "react-redux";
import { listData } from '../redux/dataSlice/dataSlice';
import SearchBar from '../components/SearchBar/SearchBar';

const Movies = () => {
  const allData = useSelector(listData);

  // Filmleri filtreleyip sadece programType: "movie" olanları alıyoruz
  const movies = allData.filter(item => item.programType === "movie");

  // İlk 18 filmi alıyoruz
  const first18Movies = movies.slice(0, 18);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {first18Movies.map((item) => (
          <ShowsCard
            key={item.id}
            poster={item.images["Poster Art"].url}
            description={item.description}
            title={item.title}
            releaseDate={item.releaseYear}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;

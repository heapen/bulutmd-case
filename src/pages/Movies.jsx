import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ShowsCard from '../components/ShowsCard/ShowsCard';
import { useSelector } from "react-redux";
import { listData } from '../redux/dataSlice/dataSlice';

const Movies = () => {
  const allData = useSelector(listData);
  const movies = allData.filter(item => item.programType === "movie");

  const [filteredFilms, setFilteredFilms] = React.useState([]);
  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredFilms = movies.filter((item) => {
        const title = item.title.toLowerCase(); // title changing to lowercase to make the search case insensitive
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return title.includes(lowerCaseSearchTerm);
      });

      setFilteredFilms(filteredFilms);
    } else {
      setFilteredFilms([]);
    }
  };

  // Filmleri filtreleyip sadece programType: "movie" olanları alıyoruz

  const displayedFilms =
  filteredFilms.length > 0
    ? filteredFilms
    : movies.length > 18
    ? movies.filter((movies) => movies.programType === "movie").slice(0, 18) // show the first 18 movies
    : movies.filter((movies) => movies.programType === "movie"); // show all movies

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {displayedFilms.map((item) => (
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
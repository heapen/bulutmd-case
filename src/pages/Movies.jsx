import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ShowsCard from '../components/ShowsCard/ShowsCard';
import { useSelector } from "react-redux";
import { listData } from '../redux/dataSlice/dataSlice';
import { selectSortBy , sortOptionsEnum} from "../redux/sortSlice/sortSlice";
import {
  sortByOldest,
  sortByNewest,
  sortByRandom,
} from "../SortFunc/sortFunctions";


const Movies = () => {
  const allData = useSelector(listData);
  const sortBy = useSelector(selectSortBy);

  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredMovies = allData.filter((item) => {
        const title = item.title.toLowerCase(); // Daha sağlıklı arama yapabilmesi için küçük harflere çevrildi.
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return title.includes(lowerCaseSearchTerm);
      });

      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies([]);
    }
  };

  const sortMovies = (moviesData) => {
    switch (sortBy) {
      case "oldest":
        return sortByOldest(moviesData);
      case "newest":
        return sortByNewest(moviesData); 
      case "random":
        return sortByRandom(moviesData);
      default:
        return moviesData;
    }
  };
  
  // Filmleri filtreleyip sadece programType: "movie" olanları alıyoruz

  const displayedSeries =
  filteredMovies.length > 0
    ? filteredMovies
    : sortBy === sortOptionsEnum.NORMAL 
    ? allData.filter((movies) => movies.programType === "movie").slice(0, 18) // ilk 18 Dizi
    : allData.filter((movies) => movies.programType === "movie"); // tüm diziler 


    const sortedMovies = sortMovies(displayedSeries);
    return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
      {sortedMovies.filter((item) => item.programType === "movie").map((item) => (
          <ShowsCard
            key={item}
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
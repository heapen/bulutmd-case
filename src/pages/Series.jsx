import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ShowsCard from '../components/ShowsCard/ShowsCard';
import { useSelector } from "react-redux";
import { listData } from '../redux/dataSlice/dataSlice';

const Series = () => {
  const allData = useSelector(listData);
  const series = allData.filter(item => item.programType === "series");

  const [filteredSeries, setFilteredSeries] = React.useState([]);
  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredSeries = series.filter((item) => {
        const title = item.title.toLowerCase(); // title changing to lowercase to make the search case insensitive
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return title.includes(lowerCaseSearchTerm);
      });

      setFilteredSeries(filteredSeries);
    } else {
      setFilteredSeries([]);
    }
  };

  // Filmleri filtreleyip sadece programType: "movie" olanları alıyoruz

  const displayedSeries =
  filteredSeries.length > 0
    ? filteredSeries
    : series.length > 18
    ? series.filter((series) => series.programType === "series").slice(0, 18) // show the first 18 movies
    : series.filter((series) => series.programType === "series"); // show all movies


  return (
    <>
      <Navbar onSearch={handleSearch}/>
      <div className="flex flex-wrap justify-center items-center h-screen">
        {displayedSeries.map((item) => (
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

export default Series;
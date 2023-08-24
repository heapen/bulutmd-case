import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ShowsCard from '../components/ShowsCard/ShowsCard';
import { useSelector } from "react-redux";
import { listData } from '../redux/dataSlice/dataSlice';

const Series = () => {
  const allData = useSelector(listData);

  // Dizilerin filtreleyip sadece programType: "series" olanları alıyoruz
  const series = allData.filter(item => item.programType === "series");

  // İlk 18 diziyi alıyoruz
  const first18Series = series.slice(0, 18);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {first18Series.map((item) => (
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

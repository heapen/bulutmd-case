import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ShowsCard from '../components/ShowsCard/ShowsCard'

const Movies = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap justify-center items-center h-screen space-x-4'>
        <ShowsCard/>
        <ShowsCard/>
        <ShowsCard/>
        <ShowsCard/>
        <ShowsCard/>
        <ShowsCard/>
    </div>
    </>
  )
}

export default Movies

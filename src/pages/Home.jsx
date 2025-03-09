import React from 'react'
import Banner from '../components/Banner'
import HighestRatedGames from '../components/HighestRatedGames'
import LatestGames from '../components/LatestGames'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HighestRatedGames></HighestRatedGames>
        <LatestGames></LatestGames>
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../components/Banner'
import HighestRatedGames from '../components/HighestRatedGames'
import LatestGames from '../components/LatestGames'
import FAQ from '../components/FAQ'
import NewsLetter from '../components/NewLetter'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HighestRatedGames></HighestRatedGames>
        <LatestGames></LatestGames>
        <FAQ></FAQ>
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
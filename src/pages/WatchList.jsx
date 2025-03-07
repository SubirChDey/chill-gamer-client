import React from 'react'
import { useLoaderData } from 'react-router-dom'

const WatchList = () => {
  const watchlist = useLoaderData();
  console.log(watchlist[0].gameTitle);
  

  return (
    <div>
      <div>
        <h3>My Watchlist</h3>
      </div>
      {
        watchlist.map(watch => <div> {watch.gameTitle} </div> )
      }
      
    </div>
  )
}

export default WatchList
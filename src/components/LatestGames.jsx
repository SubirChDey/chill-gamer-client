import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";


const LatestGames = () => {
    // const latestReviews = useLoaderData();

    const [games, setGames] = useState([]);
    
        useEffect(() => {
          const latestGames = async () => {
            const response = await fetch('http://localhost:5000/latest-games');
            const data = await response.json();
            setGames(data);
          };
      
          latestGames();
        }, []);

  return (
    <div className="pb-14">
      <header className="items-center text-center w-10/12 mx-auto py-10">
        <h3 className="text-5xl text-violet-800 font-semibold pb-4">Our Latest Games</h3>
        <p className="text-gray-600">Discover New Adventures, Thrilling Challenges, and Endless Fun – Explore Our Latest Games Now!</p>
      </header>
      <div>
        <Marquee pauseOnHover='true'>
          {
            games.map(game => <Link key={game._id} > <div>
                <img className="mx-6 h-24" src={game.gameCover} alt="" /> <h3>{game.gameTitle}</h3>
                </div> </Link>)
          }
        </Marquee>
      </div>


    </div>
  )
}

export default LatestGames
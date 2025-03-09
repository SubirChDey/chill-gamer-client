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
            <div className="bg-gray-400">
                <Marquee pauseOnHover='true' className="">
                    {
                        games.map(game => <div key={game._id} >
                            {/* <div className="">
                                <div>
                                    <img className="mx-6 h-24" src={game.gameCover} alt="" /> <h3 className=" mx-6 text-xl">{game.gameTitle}</h3>
                                    
                                </div>
                            </div> */}
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img className="px-4"
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt={game.gameTitle} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {game.gameTitle}
                                        <div className="badge badge-secondary"> {game.publishingYear} </div>
                                    </h2>
                                    <p> {game.reviewDescription} </p>
                                    <Link to={`/review/${game._id}`} className="card-actions justify-center">
                                        <div className="badge badge-info w-full py-4 text-white font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Make Favorite</div>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </Marquee>
            </div>


        </div>
    )
}

export default LatestGames
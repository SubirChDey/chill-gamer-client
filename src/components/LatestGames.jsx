import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


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
            <div>
                <div className='text-center m-10'>
                    <h3 className='mb-4'>
                        {" "}
                        <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl'>
                            <Typewriter
                                words={["Our Latest Games"]}
                                loop={Infinity}
                                cursor
                                cursorStyle="-"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h3>
                    <p className='text-center'>Discover New Adventures, Thrilling Challenges, and Endless Fun – Explore Our Latest Games Now!</p>
                </div>
            </div>
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
                                        src={game.gameCover}
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
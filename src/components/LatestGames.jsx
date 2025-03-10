import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const LatestGames = () => {
    // const latestReviews = useLoaderData();

    const [games, setGames] = useState([]);

    useEffect(() => {
        const latestGames = async () => {
            const response = await fetch('https://chill-gamer-server-sand.vercel.app/latest-games');
            const data = await response.json();
            setGames(data);
        };

        latestGames();
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 50,
            easing: "ease-in-out",
            delay: 100,
        });
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
                         
                <div data-aos="fade-up" className="bg-gray-400 p-8">
                    <Marquee pauseOnHover={true} className="flex">
                        <div className="flex gap-4 ml-4">
                            {games.map(game => (
                                <div className="card bg-base-100 w-72 " key={game._id}>
                                    <figure>
                                        <img className="p-4 w-[400px] h-[200px] object-cover rounded-3xl"
                                            src={game.gameCover}
                                            alt={game.gameTitle} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {game.gameTitle}
                                            <div className="badge badge-secondary"> {game.publishingYear} </div>
                                        </h2>
                                        <p > {game.reviewDescription.slice(0,100)}.. </p>
                                        <Link to={`/review/${game._id}`} className="card-actions justify-center">
                                            <div className="badge badge-info w-full py-4 text-white font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Make Favorite</div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>

            


        </div>
    )
}

export default LatestGames
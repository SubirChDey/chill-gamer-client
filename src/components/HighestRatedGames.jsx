import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const HighestRatedGames = () => {
    const reviews = useLoaderData();

    const topRatedGames = [...reviews]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i - rating < 1) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };

    return (
        <div>
            <h3 className='text-center m-10'>
                {" "}
                <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl'>
                    <Typewriter
                        words={["Highest Rated Games", "Top Games", "Positive Games"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="🔥"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6  ">
                {topRatedGames.map((review) => (<div key={review._id} className={`bg-[#1A1A1A]  rounded-lg shadow-md hover:shadow-lg p-4  hover:shadow-[#A91D3A] hover:scale-105 transition-all duration-300`} >
                    <div data-aos="fade-up" className='flex flex-col h-full justify-between'>
                        <div>
                            <img
                                src={review.gameCover}
                                alt={review.gameTitle}
                                className="w-full h-48 object-cover rounded-md mb-4  shadow-[#A91D3A]"
                            />
                            <h3 className="text-xl font-semibold text-[#A91D3A]">{review.gameTitle}</h3>
                            <div className="flex justify-between py-2 items-center">
                                <div className='flex gap-1 items-center'>{renderStars(review.rating)} <div className='text-white ml-4'>{review.rating}</div></div>
                                <span className="text-gray-400">{review.year}</span>
                            </div>
                        </div>
                        <div>
                            <Link to={`/review/${review._id}`} className="mt-4 inline-block px-6 py-2 bg-[#A91D3A] text-white rounded-md hover:bg-[#9c1631] transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
                                Explore Details
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}

export default HighestRatedGames
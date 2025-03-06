import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const HighestRatedGames = () => {
    const reviews = useLoaderData();
    return (
        <div>
            <h3 className='text-center'>
                {" "}
                <span className='text-red-800 font-bold text-4xl'>
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
            <p>review {reviews.length}</p>

        </div>
    )
}

export default HighestRatedGames
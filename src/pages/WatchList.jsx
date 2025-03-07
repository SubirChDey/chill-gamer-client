import Aos from 'aos';
import React, { useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom'

const WatchList = () => {
  const watchlist = useLoaderData();
  console.log(watchlist[0].gameTitle);


  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);


  return (
    <div>
      <div>
        <h3 className='text-3xl text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mt-4 mb-6'>My Watchlist</h3>
      </div>     

      {watchlist.length > 0 ? (
        <div className="overflow-x-auto md:overflow-hidden">

          <table className="w-full table-auto text-center" data-aos="fade-up">
            <thead>
              <tr className="border-b-2 border-[#A91D3A]" data-aos="fade-up">
                <th className="py-2 px-4">Game Cover</th>
                <th className="py-2 px-4">Game Title</th>
                <th className="py-2 px-4">Ratings</th>
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Genre</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map(review => (
                <tr key={review._id} className="transition-all transform duration-300 border-b border-[#333] hover:text-white hover:bg-[#2d2c2c] " data-aos="fade-up">
                  <td className="px-2 py-2 flex justify-center mx-auto">
                    <img
                      src={review.gameCover}
                      alt={review.gameTitle}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-2 px-4">{review.gameTitle}</td>
                  <td className="py-2 px-4">{review.rating}</td>
                  <td className="py-2 px-4">{review.publishingYear}</td>
                  <td className="py-2 px-4">{review.genre}</td>
                  <td className="px-2 py-2 ">                    
                    <button
                      className="px-4 py-2    bg-[#A91D3A] text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg">Your watchlist is currently empty.</p>
      )}

    </div>
  )
}

export default WatchList
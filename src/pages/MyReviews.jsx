import React, { useContext, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Aos from 'aos';

const MyReviews = () => {
  const allReviews = useLoaderData();
  const { user } = useContext(AuthContext)


  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const myReviews = allReviews.filter(review => review.userEmail === user.email)
  return (
    <div>      
      {myReviews.length > 0 ? (
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
              {myReviews.map(review => (
                <tr key={review._id} className="transition-all transform duration-300 border-b border-[#333] hover:text-white hover:bg-[#2d2c2c] "   data-aos="fade-up">
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
                  
                  <td className="px-2 py-2 md:space-x-2 space-y-2 ">
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"
                      >
                     <FaRegEdit size={20}/>
                    </button>
                    <button
                      className="px-4 py-2    bg-[#A91D3A] text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631]"
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
        <p className="text-center text-lg">No reviews have been added yet.</p>
      )}
    </div>
  )
}

export default MyReviews
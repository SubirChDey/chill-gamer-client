import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Aos from 'aos';
import Swal from 'sweetalert2';

const MyReviews = () => {
  const allReviews = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(allReviews);
  }, [allReviews]);
  
  const { user } = useContext(AuthContext)


  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const handleReviewDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-sand.vercel.app/review/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = reviews.filter(rev => rev._id !== _id);              
              setReviews(remaining);
            }
          })
          .catch(error => {
            console.error("Error deleting:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error"
            });
          });
      }
    });
  };  

  const myReviews = reviews.filter(review => review.userEmail === user.email)
  
  return (
    <div>
      <div>
        <h3 className='text-3xl text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mt-4 mb-6'>My Reviews</h3>
      </div>
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

                  <td className="px-2 py-2 md:space-x-2 space-y-2 ">
                    <Link to={`/updateReview/${review._id}`}>
                      <button
                        className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded-md shadow-md hover:bg-red-700 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      >
                        <FaRegEdit size={20} />
                      </button>
                    </Link>
                    <button onClick={() => handleReviewDelete(review._id)}
                      className="px-4 py-2 bg-[#A91D3A] cursor-pointer text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
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
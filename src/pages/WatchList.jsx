import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const WatchList = () => {
  const watchlist = useLoaderData();

  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    setWatchlists(watchlist);
  }, [watchlist]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const handleWatchlistDelete = (_id) => {
    console.log("Deleting ID:", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/watchlist/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Watchlist has been deleted.",
                icon: "success",
              });
             
              const remaining = watchlists.filter((watch) => watch._id !== _id);
              console.log(remaining);
              setWatchlists(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div>
        <h3 className='text-3xl text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mt-4 mb-6'>
          My Watchlist
        </h3>
      </div>

      {watchlists.length > 0 ? (
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
              {watchlists.map((review) => (
                <tr
                  key={review._id}
                  className="transition-all transform duration-300 border-b border-[#333] hover:text-white hover:bg-[#2d2c2c] "
                  data-aos="fade-up"
                >
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
                      onClick={() => handleWatchlistDelete(review._id)}
                      className="px-4 py-2    bg-[#A91D3A] cursor-pointer text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
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
  );
};

export default WatchList;

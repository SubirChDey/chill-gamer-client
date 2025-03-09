import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const [review, setReview] = useState({
    gameCover: "",
    gameTitle: "",
    reviewDescription: "",
    rating: "",
    publishingYear: "",
    genre: "Action",
  });

  const userEmail = `${user.email}`;
  const userName = `${user.displayName}`;

  const genres = ["Action", "RPG", "Adventure", "Horror", "Strategy"];

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!review.gameTitle || !review.reviewDescription || !review.rating) {
      toast.error("Please fill all required fields!");
      return;
    }

    const newReview = {
      ...review,
      userEmail,
      userName,
      timestamp: new Date(),
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Review Successfully Submitted",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    setReview({
      gameCover: "",
      gameTitle: "",
      reviewDescription: "",
      rating: "",
      publishingYear: "",
      genre: "Action",
    });
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-black text-white shadow-lg rounded-xl">
        <h3 className="text-center">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl">
            <Typewriter
              words={["Add New Game Review"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Game Cover URL:</label>
            <input
              type="url"
              name="gameCover"
              value={review.gameCover}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-800 text-white"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block font-medium">Game Title:</label>
            <input
              type="text"
              name="gameTitle"
              value={review.gameTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-800 text-white"
              placeholder="Enter game name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Review Description:</label>
            <textarea
              name="reviewDescription"
              value={review.reviewDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-800 text-white"
              placeholder="Write your review..."
              required
            />
          </div>

          <div>
            <label className="block font-medium">Rating (1-5):</label>
            <input
              type="number"
              name="rating"
              value={review.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Publishing Year:</label>
            <input
              type="number"
              name="publishingYear"
              value={review.publishingYear}
              onChange={handleChange}
              min="1980"
              max="2025"
              className="w-full p-2 border rounded bg-gray-800 text-white"
              placeholder="Enter year"
            />
          </div>

          <div>
            <label className="block font-medium">Genre:</label>
            <select
              name="genre"
              value={review.genre}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-800 text-white"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Your Email:</label>
            <input
              name="email"
              type="email"
              value={userEmail}
              readOnly
              className="w-full p-2 border rounded bg-gray-700 text-gray-400 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block font-medium">Your Name:</label>
            <input
              name="name"
              type="text"
              value={userName}
              readOnly
              className="w-full p-2 border rounded bg-gray-700 text-gray-400 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded hover:opacity-90"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;

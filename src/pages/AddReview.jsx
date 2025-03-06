import Lottie from "lottie-react";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddReview = () => {
  const [review, setReview] = useState({
    gameCover: "",
    gameTitle: "",
    reviewDescription: "",
    rating: "",
    publishingYear: "",
    genre: "Action",
  });

  const userEmail = "user@example.com";
  const userName = "John Doe";

  const genres = ["Action", "RPG", "Adventure", "Horror", "Strategy"];

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!review.gameTitle || !review.reviewDescription || !review.rating) {
      toast.error("Please fill all required fields!");
      return;
    }

    const reviewData = {
      ...review,
      userEmail,
      userName,
      timestamp: new Date(),
    };

    console.log("Review Submitted:", reviewData);

    toast.success("Review submitted successfully!");

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
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h3 className='text-center'>
          {" "}
          <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl'>
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

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <div>
              <label className="block font-medium">Game Cover URL:</label>
              <input
                type="url"
                name="gameCover"
                value={review.gameCover}
                onChange={handleChange}
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
                placeholder="Enter game name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Review Description:</label>
            <textarea
              name="reviewDescription"
              value={review.reviewDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
              placeholder="Enter year"
            />
          </div>

          <div>
            <label className="block font-medium">Genre:</label>
            <select
              name="genre"
              value={review.genre}
              onChange={handleChange}
              className="w-full p-2 border rounded"
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
              type="email"
              value={userEmail}
              readOnly
              className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block font-medium">Your Name:</label>
            <input
              type="text"
              value={userName}
              readOnly
              className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;

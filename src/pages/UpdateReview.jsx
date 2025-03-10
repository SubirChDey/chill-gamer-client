import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateReview = () => {
    const reviewData = useLoaderData();
    const { _id } = reviewData;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [review, setReview] = useState(reviewData || {
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

    const handleUpdate = (e) => {
        e.preventDefault();
        
        if (!review.gameTitle || !review.reviewDescription || !review.rating) {
            toast.error("Please fill all required fields!");
            return;
        }

        const updateReview = { _id, ...review };

        fetch(`https://chill-gamer-server-sand.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Success",
                        text: "Review Updated Successfully",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myReviews');
                }
            });
    };

    return (
        <div>
            <div className="max-w-lg mx-auto mt-10 p-6 bg-black text-white shadow-lg rounded-xl">
                <h3 className='text-center'>
                    <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-4xl'>
                        <Typewriter
                            words={["Update Your Review", "Change your review"]}
                            loop={Infinity}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h3>

                <form onSubmit={handleUpdate} className="space-y-2">
                    {[
                        { label: "Game Cover URL:", type: "url", name: "gameCover", placeholder: "Enter image URL" },
                        { label: "Game Title:", type: "text", name: "gameTitle", placeholder: "Enter game name", required: true },
                        { label: "Review Description:", type: "textarea", name: "reviewDescription", placeholder: "Write your review...", required: true },
                        { label: "Rating (1-5):", type: "number", name: "rating", min: "1", max: "5", required: true },
                        { label: "Publishing Year:", type: "number", name: "publishingYear", min: "1980", max: "2025", placeholder: "Enter year" }
                    ].map(({ label, type, name, ...rest }) => (
                        <div key={name}>
                            <label className="block font-medium text-gray-300">{label}</label>
                            {type === "textarea" ? (
                                <textarea
                                    name={name}
                                    value={review[name]}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-gray-800 text-white"
                                    {...rest}
                                />
                            ) : (
                                <input
                                    type={type}
                                    name={name}
                                    value={review[name]}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-gray-800 text-white"
                                    {...rest}
                                />
                            )}
                        </div>
                    ))}

                    <div>
                        <label className="block font-medium text-gray-300">Genre:</label>
                        <select name="genre" value={review.genre} onChange={handleChange} className="w-full p-2 border rounded bg-gray-800 text-white">
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>

                    {[
                        { label: "Your Email:", name: "email", value: userEmail },
                        { label: "Your Name:", name: "name", value: userName }
                    ].map(({ label, name, value }) => (
                        <div key={name}>
                            <label className="block font-medium text-gray-300">{label}</label>
                            <input
                                name={name}
                                type="text"
                                value={value}
                                readOnly
                                className="w-full p-2 border rounded bg-gray-700 text-gray-300 cursor-not-allowed"
                            />
                        </div>
                    ))}

                    <button type="submit" className="w-full p-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white rounded hover:bg-blue-600">
                        Update Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;

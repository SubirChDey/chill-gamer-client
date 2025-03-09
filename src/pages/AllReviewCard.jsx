import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllReviewCard = ({ review }) => {

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

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 50,
            easing: "ease-in-out",
            delay: 100,
        });
    }, []);

    const { _id, gameCover, gameTitle, reviewDescription, rating, publishingYear } = review;
    return (
        <div data-aos="fade-up" className="shadow-lg shadow-red-800 hover:scale-105 transition-all duration-300">
            <div className="card bg-black shadow-sm">
                <figure className="p-4">
                    <img
                        src={gameCover}
                        alt="Cover"
                        className="rounded-xl w-full h-[200px] object-cover" />
                </figure>
                <div className="card-body p-4 pb-6">
                    <h2 className="card-title text-red-800 text-3xl">{gameTitle}</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <p className="text-red-800 text-lg">Rating:</p>
                            <p className="text-red-800 text-lg flex gap-1"> {renderStars(review.rating)}</p>
                        </div>
                        <p className="text-end text-white text-lg">{publishingYear}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/review/${_id}`} className="btn btn-primary bg-red-800">Explore Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllReviewCard
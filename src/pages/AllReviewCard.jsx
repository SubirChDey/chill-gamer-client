import { Link } from "react-router-dom";

const AllReviewCard = ({ review }) => {
    const { gameCover, gameTitle, reviewDescription, rating, publishingYear } = review;
    return (
        <div>
            <div className="card bg-black w-96 shadow-sm">
                <figure className="p-4">
                    <img
                        src={gameCover}
                        alt="Cover"
                        className="rounded-xl" />
                </figure>
                <div className="card-body p-4 pb-6">
                    <h2 className="card-title text-red-800 text-3xl">{gameTitle}</h2>
                    <div className="flex justify-between">
                        <p className="text-red-800 text-lg">{rating}</p>
                        <p className="text-end text-white text-lg">{publishingYear}</p>
                    </div>
                    <div className="card-actions">
                        <Link className="btn btn-primary bg-red-800">Explore Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllReviewCard
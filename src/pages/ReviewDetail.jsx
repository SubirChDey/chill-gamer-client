
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineStarHalf } from "react-icons/md";
import { useLoaderData } from "react-router-dom"

const ReviewDetail = () => {
    const review = useLoaderData()


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
    const handleAddToWatchlist = () => {
        fetch(`http://localhost:5000/watchlist`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Added to favorite', data);
                if (data.insertedId) {
                    alert('Data added to watchlist')
                }

            })


    }


    return (
        <div>
            <div className="bg-[#9538E2] w-11/12 h-96 mx-auto text-center">
                <h2 className="text-3xl text-white font-bold p-4"> Your Gaming Review </h2>
                <p className="text-white pb-8">Gaming reviews provide expert insights and ratings to enhance your gaming experience.</p>
                <div className="flex justify-center gap-6 pb-6">
                </div>
            </div>
            <div className="lg:flex justify-center h-[500px] max-w-4xl mx-auto bg-[#fbfafa] relative -top-52 p-4 rounded-3xl">
                <div className="p-4 flex-1/2">
                    <img className="w-full h-full rounded-3xl" src={review.gameCover} alt="" />
                </div>
                <div className="p-4 flex-1/2">
                    <h3 className="text-3xl text-[#09080F] font-semibold my-2">Name: {review.gameTitle}</h3>
                    <p className="text-xl text-gray-700 font-semibold my-2">Publishing Year: {review.publishingYear}</p>

                    <p className="text-gray-600 my-2"> Genre: {review.genre} </p>
                    <p className="text-gray-600 my-2"> Name: {review.name} </p>
                    <p className="text-gray-600 my-2"> email: {review.email} </p>


                    <div className="flex items-center gap-1">
                        <h3 className="font-bold">Rating </h3> <MdOutlineStarHalf className="text-yellow-300 w-5 h-5" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="flex gap-1">{renderStars(review.rating)}</div> <div>{review.rating}</div>
                    </div>
                    <div className="flex justify-start my-3">
                        <div onClick={handleAddToWatchlist} className="flex items-center gap-1 bg-[#9538E2] py-2 px-4 rounded-full text-white"><button > Add to WatchList </button> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewDetail
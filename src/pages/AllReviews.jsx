import { useLoaderData } from "react-router-dom"
import AllReviewCard from "./AllReviewCard";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const AllReviews = () => {
  const reviews = useLoaderData();

  const [review, setReview] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [genres, setGenres] = useState([]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  useEffect(() => {
    if (reviews.length > 0) {
      const uniqueGenres = [...new Set(reviews.map(review => review.genre))];
      setGenres(uniqueGenres);
    }
  }, [reviews]);


  const sortedReviews = () => {
    let sorted = [...reviews];
    if (sortOption === 'rating-asc') {
      sorted = sorted.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'rating-desc') {
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'year-asc') {
      sorted = sorted.sort((a, b) => a.publishingYear - b.publishingYear);
    } else if (sortOption === 'year-desc') {
      sorted = sorted.sort((a, b) => b.publishingYear - a.publishingYear);
    }
    return sorted;
  };

  const filteredReviews = () => {
    return sortedReviews().filter((review) => {
      const matchesGenre = filterGenre ? review.genre.includes(filterGenre) : true;      
      return matchesGenre
    });
  };



  return (
    <div className="">
      <div>
        <div>
          <h3 className='text-center mt-6'>
            {" "}
            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl'>
              <Typewriter
                words={["All Reviews"]}
                loop={Infinity}
                cursor
                cursorStyle="🔥"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="text-center mt-4 mb-8">Unbiased Insights, Every Review Counts – Explore Honest Opinions & Ratings!</p>
        </div>
      </div>
      <div>
        <div className={`flex flex-col gap-4 md:flex md:flex-row justify-between mb-6 px-4 md:w-10/12 mx-auto `}>
          <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center">
            <label className="mr-4 text-lg">Sort By:</label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border border-[#8a1a30] rounded-md p-2"
            >
              <option value="" disabled selected>Select an Option</option>
              
              <option value="rating-asc">Rating (Low to High)</option>
              <option value="rating-desc">Rating (High to Low)</option>
              <option value="year-asc">Year (Old to New)</option>
              <option value="year-desc">Year (New to Old)</option>
            </select>
          </div>          

          <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center">
            <label className="mr-4 text-lg">Filter by Genre:</label>
            <select
              value={filterGenre}
              onChange={handleGenreChange}
              className="border border-[#8a1a30] rounded-md p-2"
            >
              <option value="">All Genres</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">

        {
          filteredReviews().map(review => <AllReviewCard key={review._id} review={review}> </AllReviewCard>)

        }
      </div>
    </div>
  )
}

export default AllReviews
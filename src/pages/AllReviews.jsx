import { useLoaderData } from "react-router-dom"
import AllReviewCard from "./AllReviewCard";

const AllReviews = () => {
  const reviews = useLoaderData();

  return (    

    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        reviews.map(review => <AllReviewCard key={review._id} review={review}> </AllReviewCard>)

      }
    </div>
  )
}

export default AllReviews
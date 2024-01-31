import { useState } from "react";

function SingleCart() {
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState("");
  const [userReview, setUserReview] = useState("");
  const handleSubmitReview = () => {
    if (userRating && userReview) {
      const newReview = { rating: userRating, review: userReview };
      setReviews([...reviews, newReview]);
      setUserRating("");
      setUserReview("");
    } else {
      alert("Please provide both rating and review.");
    }
  };
  return (
    <div className="single-cart">
      {/* Cart details... */}

      {/* Review Form */}
      <div className="review-form">
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={userRating}
          onChange={(e) => setUserRating(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
        />
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>

      {/* Display Reviews */}
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.rating} stars</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleCart;

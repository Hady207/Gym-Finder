import React from "react";
import ReviewCard from "../Gym Components/ReviewCard";
const ReviewsScreen = ({ profile, author, text, rating }) => {
  return (
    <div className="review__screen">
      <ReviewCard
        profile={profile}
        author={author}
        text={text}
        rating={rating}
      />
    </div>
  );
};

export default ReviewsScreen;

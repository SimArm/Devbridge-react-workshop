import React, { useState } from "react";

import AddReview from "../AddReview";
import SingleReview from "../../../components/SingleReview";

import "./Reviews.scss";

const Reviews = () => {
  const [isReviewing, setReviewing] = useState(false);

  const [isAddingReview, setAddingReview] = useState('');

  return (
    <div className="reviews">
      <div className="reviews-heading">
        <h2>Reviews</h2>
        {!isReviewing && (
          <button 
           onClick={() => setReviewing(true)}
           className="reviews-add"
          >Add review</button>
        )}
      </div>

      {isReviewing && (
        <AddReview 
          onCancelReview = {()=>setReviewing(false)}
          onAddingReview = {(conentData) => setAddingReview(conentData)}
        />
      )}
      {isAddingReview && (
          <SingleReview content={isAddingReview}  />
        )
      }
      <SingleReview content="This is my first review!" />
    </div>
  );
};

export default Reviews;

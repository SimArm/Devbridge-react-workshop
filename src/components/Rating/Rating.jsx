import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Rating.scss";

const Rating = ({ rating }) => {
  const starsToShow = Number(rating) - Math.floor(rating) < 0.5 ? Math.floor(rating) : Math.floor(rating) + 1;
  const starArray = Array.from(Array(10));

  return (
    <div className="rating">
      <div className="rating-value">{rating}</div>
      <div className="rating-stars">
        {starArray.map((star, index) => (
          <FontAwesomeIcon key={index} className="rating-star" icon={index >= starsToShow ? farStar : faStar} />
        ))}
      </div>
    </div>
  );
};

export default Rating;

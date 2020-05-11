import React from "react";
import { Link } from "react-router-dom";

import "./MovieCard.scss";

const MovieCard = ({ link, image, title }) => {
  return (
    <div className="card">
      <Link to={link} className="card-link">
        <img className="card-image" src={image} alt="movie poster" />
        <h3 className="card-title">{title}</h3>
        <div className="card-shadow"></div>
      </Link>
    </div>
  );
};

export default MovieCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Back from "../../components/Back";
import Rating from "../../components/Rating";
import Button from "../../components/Button";
import Reviews from "./Reviews";
import Loading from "../../components/Loading";
import { movies } from "../../constants/data";

const Movie = ({ myMovies, toggleIsMyMovie }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const isMyMovie = myMovies.includes(movieId);

  useEffect(() => {
    const targetMovie = movies.find((movie) => movie.id === movieId);
    setMovie(targetMovie);
  }, [movieId]);

  if (!movie) {
    return <Loading />;
  }

  const { Title, Plot, Poster, imdbRating } = movie;

  return (
    <div className="movie" style={{ backgroundImage: `url(${Poster})` }}>
      <header className="movie-header">
        <Back />
      </header>

      <div className="movie-container">
        <div className="movie-content">
          <h1 className="movie-heading">{Title}</h1>
          <Rating rating={imdbRating} />

          <div className="movie-synopsis">
            <h2>Synopsis</h2>
            <p>{Plot}</p>

            <Button onClick={() => toggleIsMyMovie(movieId)} active>
              {isMyMovie ? "Remove from my movies" : "Add to my movies"}
            </Button>
          </div>

          <Reviews />
        </div>
      </div>
      <div className="movie-shadow" />
    </div>
  );
};

export default Movie;

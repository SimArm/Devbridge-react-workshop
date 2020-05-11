import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Movie from "./views/Movie";
import { movies } from "./constants/data";

import "./scss/style.scss";

function App() {
  const [moviesList, setMovieList] = useState(movies);

  const toggleIsMyMovie = (movieId) => {
    const updatedMovies = moviesList.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          isMyMovie: !movie.isMyMovie,
        };
      }

      return movie;
    });

    setMovieList(updatedMovies);
  };

  const myMoviesIds = moviesList.filter(({ isMyMovie }) => isMyMovie).map(({ id }) => id);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home movies={moviesList} />
        </Route>
        <Route path="/movie/:movieId" exact>
          <Movie myMovies={myMoviesIds} toggleIsMyMovie={toggleIsMyMovie} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

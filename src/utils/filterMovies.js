const filterMovies = (movies, onlyMyMovies = false) => {
    if (onlyMyMovies) {
        return movies.filter((movie) => movie.isMyMovie);
    }

    return movies;
};

export default filterMovies;

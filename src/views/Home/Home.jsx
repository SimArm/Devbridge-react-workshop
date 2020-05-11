import React, { useState } from 'react'

import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import MovieCard from "../../components/MovieCard";
import { Tabs } from "../../constants/app";
import filterMovies from "../../utils/filterMovies";

const navigationItems = [
    {
      key: Tabs.ALL,
      label: "All movies",
    },
    {
      key: Tabs.MY_MOVIES,
      label: "My movies",
    },
  ];

const Home = ({ movies }) => {
    const [currentTab, changeCurrentTab] = useState(Tabs.ALL);
    const moviesList = filterMovies(movies, currentTab === Tabs.MY_MOVIES) || [];
    return (
        <div className="home">
            <div className="home-header">
                <Logo />
                <Navigation 
                    navigationItems={navigationItems}
                    handleItemClick={changeCurrentTab}
                    selectedItemKey={currentTab}
                />
            </div>
            <div className="home-container">
                <div className="home-grid">
                    { moviesList && moviesList.map((movie) => {
                        return (
                                <MovieCard
                                image={movie.Poster}
                                link={`/movie/${movie.id}`}
                                title={movie.Title}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;

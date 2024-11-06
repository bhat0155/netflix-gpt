import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popular);
  const topRated = useSelector((store) => store.movies?.topRated);
  const upComing = useSelector((store) => store.movies?.upComing);
 
  return (
    <div className="bg-black">
      <div className="md:-mt-24  -mt-0 z-10 relative">
        <MovieList title={"Recommended"} movies={movies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming"} movies={upComing} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popular);
  console.log({movies});
  console.log({popularMovies});

  return (
    <div className="bg-black">
      <div className="-mt-52 z-10 relative">
        <MovieList title={"recommended"} movies={movies} />
        <MovieList title={"popular"} movies={popularMovies} />
        <MovieList title={"comedy"} movies={movies} />
        <MovieList title={"thriller"} movies={movies} />
        <MovieList title={"action"} movies={movies} />
        <MovieList title={"emotional"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

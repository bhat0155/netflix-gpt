import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 z-10 relative">
        <MovieList title={"popular"} movies={movies} />
        <MovieList title={"horror"} movies={movies} />
        <MovieList title={"comedy"} movies={movies} />
        <MovieList title={"thriller"} movies={movies} />
        <MovieList title={"action"} movies={movies} />
        <MovieList title={"emotional"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

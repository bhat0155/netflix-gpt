import React from "react";
import { POSTER_URL } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2 className="text-white">{title}</h2>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((item) => (
            <MovieCard key={item.id} poster={item.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

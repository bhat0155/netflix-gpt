import React from "react";
import { POSTER_URL } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white m-3 text-lg">{title}</h1>

      <div className="flex overflow-x-scroll mx-3">
        <div className="flex">
          {movies?.map((item) => {
            return (<MovieCard key={item.id} poster={item.poster_path} />);
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

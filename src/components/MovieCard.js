import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (!poster)return;
  return (
    <div className="md:w-48 w-32">
      <img src={POSTER_URL + poster} alt="Poster" />
    </div>
  );
};

export default MovieCard;

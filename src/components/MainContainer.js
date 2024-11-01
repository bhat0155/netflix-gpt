import React from "react";
import { useSelector } from "react-redux";
import Video from "./Video";
import Title from "./Title";

const MainContainer = () => {
  // main movie data will come from store
  let movie = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movie) return;
  let mainMovie = movie[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <Title title={original_title} overview={overview} id={id} />
      <Video title={original_title} overview={overview} id={id} />
    </div>
  );
};

export default MainContainer;

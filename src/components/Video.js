import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const Video = ({ title, overview, id }) => {
  const dispatch = useDispatch();

  const fetchTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const trailer = await data.json();

    const filteredArray = trailer.results.filter(
      (item) => item.type === "Trailer"
    );

    const mainTrailer = filteredArray.length
      ? filteredArray[0]
      : trailer.results[0];

    dispatch(addTrailer(mainTrailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  const disPlayingTrailer = useSelector(
    (store) => store?.movies?.currentTrailer
  );
  if (!disPlayingTrailer) return;

  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="pt-4 text-lg w-1/3">{overview}</h2>
      <div>
        <button className="bg-gray-50 text-black py-1 px-6 border my-4 mr-4 opacity-60 rounded-md">
          Play ▶️
        </button>
        <button className="bg-gray-400 text-white py-1 px-6 border my-4 opacity-40 rounded-lg">
          More Info
        </button>
      </div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + disPlayingTrailer.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Video;

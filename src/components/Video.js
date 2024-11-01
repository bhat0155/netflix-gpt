import { useSelector } from "react-redux";

import useMovieTrailer from "./hooks/useMovieTrailer";

const Video = ({ title, overview, id }) => {
  useMovieTrailer(id);

  const disPlayingTrailer = useSelector(
    (store) => store?.movies?.currentTrailer
  );
  if (!disPlayingTrailer) return;

  return (
    <div className="border">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          disPlayingTrailer.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Video;

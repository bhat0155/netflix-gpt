import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTrailer } from "../../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
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
};

export default useMovieTrailer;

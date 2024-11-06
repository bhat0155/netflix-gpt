import { API_OPTIONS } from "../../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../utils/movieSlice.js";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const nowPlaying=useSelector((store)=>store.movies.useNowPlayingMovies)
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addMovies(movies.results));
  };

  useEffect(() => {
    !nowPlaying && getData();
  }, []);
};

export default useNowPlayingMovies;

import { API_OPTIONS } from "../../utils/constants.js";
import { useDispatch } from "react-redux";
import { addMovies } from "../../utils/movieSlice.js";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
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
    getData();
  }, []);
};

export default useNowPlayingMovies;

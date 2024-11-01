import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import {  addPopular } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addPopular(movies.results));
  };

  useEffect(() => {
    getData();
  }, []);

}

export default usePopularMovies
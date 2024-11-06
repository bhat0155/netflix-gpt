import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import {  addPopular } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
  const popular=useSelector((store)=>store.movies.popular)

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
    !popular&&getData();
  }, []);

}

export default usePopularMovies;
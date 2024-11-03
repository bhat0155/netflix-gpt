import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTopRated } from "../../utils/movieSlice";
import { useEffect } from "react";


const useTopRated=()=>{
    const dispatch = useDispatch();
    const getData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const movies = await data.json();
  
      dispatch(addTopRated(movies.results));
    };
  
    useEffect(() => {
      getData();
    }, []);

}

export default useTopRated;
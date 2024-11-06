import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpcomming } from "../../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming=()=>{
  const upComing=useSelector((store)=>store.movies.upComing)

    const dispatch = useDispatch();
    const getData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const movies = await data.json();
  
      dispatch(addUpcomming(movies.results));
    };
  
    useEffect(() => {
      !upComing && getData();
    }, []);

}

export default useUpcoming;
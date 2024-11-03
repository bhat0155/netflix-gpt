import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRated from "./hooks/useTopRated";
import useUpcoming from "./hooks/useUpcoming";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggleView = useSelector((store) => store.GPTView.currentState);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  return (
    <div className="w-screen">
      <Header />
      {toggleView ? (
        <GPTSearchPage />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

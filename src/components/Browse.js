import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  return (
    <div className="w-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/** 
         Main container
            -video background
            -title

        secondary container
            - movieList *n
                - cards*n
        */}
    </div>
  );
};

export default Browse;

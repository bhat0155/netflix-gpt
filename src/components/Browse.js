import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

const Browse = () => {
    useNowPlayingMovies()
  return (
    <div className="w-screen">
      <Header />
    </div>
  );
};

export default Browse;

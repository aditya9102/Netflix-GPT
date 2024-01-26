import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
      Main Container 
        - VideoBackground
        - VideoTitle

    */}
    </div>
  );
};
export default Browse;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useGetNowPlayingMovies from "../../hooks/_movies/useGetNowPlayingMovies";
import usePopularMovies from "../../hooks/_movies/usePopularMovies";
import useTopRatedMovies from "../../hooks/_movies/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/_movies/useUpcomingMovies";
import useAllTrending from "../../hooks/_movies/useAllTrending";
import useMoviesTrending from "../../hooks/_movies/useMoviesTrending";

const SecondaryContainer = () => {
  const { moviesNowPlaying } = useGetNowPlayingMovies();
  const { popular } = usePopularMovies();
  const { topRated } = useTopRatedMovies();
  const { upComing } = useUpcomingMovies();
  const { trending} = useAllTrending();
 const { moviesTrending } = useMoviesTrending();
  
  if (!moviesNowPlaying || moviesNowPlaying.length === 0) return null;
  if (!popular || popular.length === 0) return null;
  if (!topRated || topRated.length === 0) return null;
  if (!upComing || upComing.length === 0) return null;
  if (!trending || trending.length === 0) return null;
  if (!moviesTrending || moviesTrending.length === 0) return null;
  return (
    <div className="w-[99vw] bg-gray-900">
      <div className="relative -top-[13.5rem] ">
        <MovieList title={"Now Playing"} movies={moviesNowPlaying} />
        <MovieList title={"Trending"} movies={trending} />
        <MovieList title={"Popular"} movies={popular} />
        <MovieList title={"Up Coming"} movies={upComing} />
        <MovieList title={"Trending Movies"} movies={moviesTrending} />
        <MovieList title={"Top Rated"} movies={topRated} />
      </div>
    </div>
  );
};
export default SecondaryContainer;

import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useGetNowPlayingMovies from "../../hooks/_movies/useGetNowPlayingMovies";

const MainContainer = () => {
  const { loading, moviesNowPlaying, selectedMovie } = useGetNowPlayingMovies();
  if (loading && !moviesNowPlaying) return null;
  if (!selectedMovie) return null;
  const { original_title, overview, id } = selectedMovie;
  return (
    <>
      <VideoTitle overview={overview} title={original_title} />
      <VideoBackground movieId={id} />
    </>
  );
};
export default MainContainer;

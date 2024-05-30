import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDBAPI_URL, URL_OPTIONS } from "../../utils/helper";
import { getNowPlayingMovies } from "../../redux/features/moviesSlice";

const useGetNowPlayingMovies = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const moviesNowPlaying = useSelector((store) => store.movies?.nowPlaying);
  useEffect(() => {
   !moviesNowPlaying && getDataMovies();
  }, []);

  const getDataMovies = useCallback(async() => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        URL_OPTIONS
      );
      const json = await data.json();
      dispatch(getNowPlayingMovies(json?.results));
    } catch (error) {
      setInfo("Data is fetch was Error Please try gain");
    } finally {
      setLoading(false);
    }
  }, [moviesNowPlaying]);

  useEffect(() => {
    if (moviesNowPlaying && moviesNowPlaying.length > 0 && !selectedMovie) {
      const randomIndex = Math.floor(Math.random() * moviesNowPlaying.length);
      setSelectedMovie(moviesNowPlaying[randomIndex]);
    }
  }, [moviesNowPlaying, selectedMovie]);
  return { loading, setLoading, info, setInfo, moviesNowPlaying, selectedMovie };
};

export default useGetNowPlayingMovies;

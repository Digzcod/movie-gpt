import React, { useCallback, useEffect, useState } from "react";
import { URL_OPTIONS } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTrending } from "../../redux/features/moviesSlice";

const useMoviesTrending = () => {
  const [load, setLoad] = useState(false);
  const [info, setInfo] = useState("");
  const moviesTrending = useSelector((store) => store.movies?.moviesTrending);
  const dispatch = useDispatch();

  useEffect(() => {
    !moviesTrending && getDataMovies();
  }, []);

  const getDataMovies = useCallback(async () => {
    setLoad(true);
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day",
        URL_OPTIONS
      );
      const json = await data.json();
      dispatch(getMoviesTrending(json?.results));
    } catch (error) {
      setInfo("Data is fetch was Error Please try gain");
    } finally {
      setLoad(false);
    }
  }, [moviesTrending]);

  return {moviesTrending, load, setLoad, info, setLoad };
};

export default useMoviesTrending;

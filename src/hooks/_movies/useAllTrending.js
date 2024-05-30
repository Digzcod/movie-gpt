import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_OPTIONS } from "../../utils/helper";
import { getAllTrending } from "../../redux/features/moviesSlice";

const useAllTrending = () => {
  const [load, setLoad] = useState(false);
  const [info, setInfo] = useState("");
  const trending = useSelector((store) => store.movies?.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    !trending && getDataMovies();
  }, []);

  const getDataMovies = useCallback(async () => {
    setLoad(true);
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/all/day",
        URL_OPTIONS
      );
      const json = await data.json();
      dispatch(getAllTrending(json?.results));
    } catch (error) {
      setInfo("Data is fetch was Error Please try gain");
    } finally {
      setLoad(false);
    }
  }, [trending]);

  return { trending, load, setLoad, info, setInfo };
};

export default useAllTrending;

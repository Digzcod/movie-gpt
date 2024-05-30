import { useState, useEffect, useCallback } from "react";
import { getPopularMovies } from "../../redux/features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { URL_OPTIONS } from "../../utils/helper";

const usePopularMovies = () => {
  const [load, setLoad] = useState(false);
  const [info, setInfo] = useState("");
  const popular = useSelector((store) => store.movies?.popular);
  const dispatch = useDispatch();

  useEffect(() => {
   !popular && getDataMovies();
  }, []);
  const getDataMovies = useCallback(async () => {
    setLoad(true);
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        URL_OPTIONS
      );
      const json = await data.json();
      dispatch(getPopularMovies(json?.results));
    } catch (error) {
      setInfo("Data is fetch was Error Please try gain");
    } finally {
      setLoad(false);
    }
  }, [popular]);

  return { popular, load, setLoad, info, setInfo };
};

export default usePopularMovies;

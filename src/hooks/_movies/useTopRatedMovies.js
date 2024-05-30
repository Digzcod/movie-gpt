import React, {useState, useEffect, useCallback} from 'react'
import { getTopRatedMovies } from '../../redux/features/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { URL_OPTIONS } from '../../utils/helper';

const useTopRatedMovies = () => {
    const [load, setLoad] = useState(false);
    const [info, setInfo] = useState("");
    const topRated = useSelector((store) => store.movies?.topRated);
    const dispatch = useDispatch();
    useEffect(() => {
      getDataMovies();
    }, []);
  
    const getDataMovies = useCallback(async () => {
      setLoad(true);
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          URL_OPTIONS
        );
        const json = await data.json();
        dispatch(getTopRatedMovies(json?.results));
      } catch (error) {
        setInfo("Data is fetch was Error Please try gain");
      } finally {
        setLoad(false);
      }
    },[topRated]);
    return { topRated, load, setLoad, info, setInfo };
}

export default useTopRatedMovies

// import { PiMagnifyingGlass } from "react-icons/pi";
import React, { useEffect, useState, useCallback } from 'react'
import { getUpComingMovies } from '../../redux/features/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { URL_OPTIONS } from '../../utils/helper';

const useUpcomingMovies = () => {
    const [load, setLoad] = useState(false);
    const [info, setInfo] = useState("");
    const upComing = useSelector((store) => store.movies?.upComing);
    const dispatch = useDispatch();
  
    useEffect(() => {
     !upComing && getDataMovies();
    }, []);
  
    const getDataMovies = useCallback(async () => {
      setLoad(true);
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          URL_OPTIONS
        );
        const json = await data.json();
        dispatch(getUpComingMovies(json?.results));
      } catch (error) {
        setInfo("Data is fetch was Error Please try gain");
      } finally {
        setLoad(false);
      }
    }, [upComing]);
  
    return {upComing, load, setLoad, info, setInfo };
}

export default useUpcomingMovies
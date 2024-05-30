import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../../redux/features/moviesSlice";
import { URL_OPTIONS } from "../../utils/helper";

const useMovieTrailer = (movieId) => {
  const [load, setLoad] = useState(false);

  const getVideos = useCallback(async () => {
    setLoad(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      URL_OPTIONS
    );
    const json = await data.json();
    const filterTypeData = json.results.filter((v) => v.type === "Trailer");
    const trailer = filterTypeData.length ? filterTypeData[0] : json.results[0];
    dispatch(getTrailerMovie(trailer?.key));
    setLoad(false);
  }, [getTrailerMovie]);

  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  return {load};
};

export default useMovieTrailer;

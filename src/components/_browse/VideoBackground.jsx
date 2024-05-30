import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/_movies/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const { load } = useMovieTrailer(movieId);
  const trailerData = useSelector((store) => store.movies.trailer);

  if (load) return;

  return (
    <div className="w-full h-[900px] mt-[-8rem]">
      <iframe
      // width={1000}
      className="w-full h-full"
        src={"https://www.youtube.com/embed/"+trailerData+"?&autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;



// rel=0&autoplay=1
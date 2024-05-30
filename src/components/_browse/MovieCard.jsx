import React from "react";
import { IMG_CDN_URL } from "../../utils/helper";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[13rem] h-[17.5rem] flex-shrink-0 rounded">
      <img className="w-full h-full object-cover" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;

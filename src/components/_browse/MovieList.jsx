import React from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useRefScroll from "../../hooks/_movies/useRefScroll";

const MovieList = ({ title, movies }) => {
  const {
    isHover,
    scrollRef,
    showPrev,
    showNext,
    scrollLeft,
    scrollRight,
    setIsHover,
  } = useRefScroll();

  return (
    <div className="w-full px-6">
      <h1 className="text-2xl font-medium text-white py-[.5rem] mt-[2rem]">
        {title}
      </h1>
      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {showPrev && isHover && (
          <button
            className="absolute left-0 z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full"
            onClick={scrollLeft}
          >
            <FaChevronLeft size={37} color="white" />
          </button>
        )}
        <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex gap-[.8rem]">
            {movies.map((m) => (
              <MovieCard key={m?.id} posterPath={m?.poster_path} />
            ))}
          </div>
        </div>

        {showNext && isHover && (
          <button
            className="absolute right-0 z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full"
            onClick={scrollRight}
          >
            <FaChevronRight size={37} color="white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;

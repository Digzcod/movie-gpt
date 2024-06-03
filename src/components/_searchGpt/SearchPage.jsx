import React from "react";
import { Image_BG_NetFlix } from "../../utils/helper";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import useGptMovieSearch from "../../hooks/_gptsearch/useGptMovieSearch";

const SearchPage = () => {
  useGptMovieSearch();
  return (
    <section
      className="w-full h-full grid bg-cover max-md:px-0  max-xl-px-[2rem] xl:px-[4rem]"
      style={{ backgroundImage: `url(${Image_BG_NetFlix})` }}
    >
      <div className="flex justify-center mb-10">
        <GptSearchBar />
      </div>
      <GptMovieSuggestion />
    </section>
  );
};

export default SearchPage;

import React from "react";
import { Image_BG_NetFlix } from "../../utils/helper";
import Header from "../header";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { useSelector } from "react-redux";
import useGptMovieSearch from "../../hooks/_gptsearch/useGptMovieSearch";

const SearchPage = () => {
  useGptMovieSearch();
  return (
    <section
      className="w-full h-full grid bg-cover px-[8rem]"
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

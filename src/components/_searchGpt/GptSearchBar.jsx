import React, { useRef, useState } from "react";
import { language } from "../../utils/languageConstant";
import { PiMagnifyingGlass } from "react-icons/pi";
import useGptMovieSearch from "../../hooks/_gptsearch/useGptMovieSearch";

const GptSearchBar = () => {
  const { loading, languageKey, searchText, handleSearchGpt } =
    useGptMovieSearch();
  return (
    <section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" flex items-center  mt-[10rem] py-[1.4rem] px-[3rem] rounded-full"
        style={{ backgroundColor: "rgba(1, 0, 0, 0.45)" }}
      >
        <input
          ref={searchText}
          className="w-[40rem] pl-[2rem] p-4 h-[3.5rem] tracking-wide rounded-l-full outline-red-500 outline-0"
          type="text"
          placeholder={language[languageKey].placeholder}
        />
        <button
          onClick={handleSearchGpt}
          className="flex items-center bg-red-500 hover:bg-red-700 text-white text-xl py-2 px-[3rem] rounded-r-full h-[3.5rem] font-medium w-[25%]"
        >
          <PiMagnifyingGlass className="mr-2" size={25} />
          {loading ? "loading..." : language[languageKey].search}
        </button>
      </form>
    </section>
  );
};

export default GptSearchBar;

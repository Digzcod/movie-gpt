import React, { useRef, useState } from "react";
import { language } from "../../utils/languageConstant";
import { PiMagnifyingGlass } from "react-icons/pi";
import useGptMovieSearch from "../../hooks/_gptsearch/useGptMovieSearch";
import styleGPt from "classnames"

const GptSearchBar = () => {
  const { loading, languageKey, searchText, handleSearchGpt } =
    useGptMovieSearch();
  return (
    <section className="max-md:w-full max-md:px-[2rem] max-sm:px-[1rem]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-md:w-full flex items-center max-md:py-3 max-md:px-5  mt-[10rem] md:py-[1.4rem] md:px-[3rem] rounded-full"
        style={{ backgroundColor: "rgba(1, 0, 0, 0.45)" }}
      >
        <input
          ref={searchText}
          className={InputStyle}
          type="text"
          placeholder={language[languageKey].placeholder}
        />
        <button
          onClick={handleSearchGpt}
          className={btnStyle}
        >
          <PiMagnifyingGlass className="max-md:hidden md:mr-2 md:visible" size={25} />
          {loading ? "loading..." : language[languageKey].search}
        </button>
      </form>
    </section>
  );
};

export default GptSearchBar;

export const InputStyle = styleGPt(
  `max-md:w-full max-md:px-4 max-md:py-3 
  md:w-[25rem] md:pl-[2rem] md:py-7 md:h-[3rem] 
  lg:w-[40rem] lg:pl-[2rem] lg:p-4 lg:h-[3.5rem] 
  max-md:text-sm
  tracking-wide rounded-l-full 
  outline-red-500 outline-0
  `, {
  
})
export const btnStyle = styleGPt(
  `
  flex items-center rounded-r-full 
  bg-red-500 hover:bg-red-700 
  text-white font-medium 
  max-md:px-[2.5rem] max-md:py-[.60rem] 
  max-sm:px-[2rem]
  md:px-[3rem] md:py-4
  `, {
  
})

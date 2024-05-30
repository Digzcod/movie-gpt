import React from "react";
import { PiPlayFill, PiPlusSquareFill } from "react-icons/pi";


const getFirstTwoSentences = (text) => {
  // const match = text.match(/[^.!?]*[.!?]\s*[^.!?]*[.!?]/);
  const match = text.match(/[^.!?]*[.!?]/);
  return match ? match[0] : text;
};

const VideoTitle = ({ title, overview }) => {
  const limitOverview = getFirstTwoSentences(overview)
  return (
    <div className="w-1/3 ml-[6rem] px-[4rem] top-[18rem] absolute">
      <h1 className="text-5xl text-white font-bold tracking-[1px]">{title}</h1>
      <div className="flex mt-[2rem] mb-4 gap-[2rem]">
        <button className="hover:bg-white hover:text-black flex items-center py-2 px-4 text-lg text-white font-medium rounded bg-slate-800">
          <PiPlayFill className="mr-[.5rem]" /> Play
        </button>
        <button className="hover:bg-white hover:text-black flex items-center py-2 px-4 text-lg text-white font-medium rounded bg-slate-800">
          <PiPlusSquareFill className="mr-[.5rem]" /> My List
        </button>
      </div>
      <p className="text-white text-lg">{limitOverview}</p>
    </div>
  );
};

export default VideoTitle;


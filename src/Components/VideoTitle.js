import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[15%] px-6 md:px-24 absolute w-screen aspect-video  text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-6xl font-bold mx-[-20px]">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 mx-[-20px]">
        {overview}
      </p>
      <div className="my-4 md:m-0 ">
        <button className="bg-white text-black  py-1 md:py-4  px-3 mx-[-20px] md:px-12 text-xl  rounded-lg hover:opacity-80  ">
          ▶Play
        </button>
        <button className="bg-gray-600 text-white hidden md:inline-block p-4 mx-10 px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[15%] px-24 absolute w-screen aspect-video  text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:opacity-80  ">
          ▶Play
        </button>
        <button className="bg-gray-600 text-white p-4 mx-2 px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const Title = ({title, overview}) => {
  return (
    <div className="pt-[25%] mt-1 px-6 md:px-24 absolute text-white md:bg-gradient-to-r md:from-black h-screen w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="hidden md:pt-4 md:text-lg md:w-1/3 w-screen md:-pt-4 md:block">{overview}</h2>
      <div>
        <button className="bg-gray-50 text-black py-1 px-6 border my-4 mr-4 hover:opacity-80 rounded-md">
        ▶️ Play 
        </button>
        <button className="bg-gray-400 text-white py-1 px-6 border my-4 hover:opacity-80 rounded-lg">
          ！More Info
        </button>
      </div>
    </div>
  );
};

export default Title;

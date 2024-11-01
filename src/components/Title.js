import React from "react";

const Title = ({title, overview}) => {
  return (
    <div className="pt-[25%] mt-1 px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="pt-4 text-lg w-1/3">{overview}</h2>
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

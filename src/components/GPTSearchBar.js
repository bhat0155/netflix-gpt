import React from "react";

import { languages } from "../utils/languages";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const chosenLanguage = useSelector((store) => store.language.language);
  console.log({ chosenLanguage });
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 z-1 relative">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languages[chosenLanguage].placeholder}
        ></input>
        <button className="bg-red-700 text-white rounded-lg py-2 px-4 m-4 col-span-3">
          {languages[chosenLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

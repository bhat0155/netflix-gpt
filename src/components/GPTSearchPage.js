import { useSelector } from "react-redux";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearchPage = () => {
  const view = useSelector((store) => store.GPTView.currentState);
  return (
    <div className="bg-black">
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GPTSearchPage;

import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGPTView } from "../utils/gptSearchSlice";
import { supportingLanguages } from "../utils/languages";
import { changeLanguage } from "../utils/languagesSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const GPTView = useSelector((store) => store.GPTView.currentState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;

        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            uid: uid,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);


  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const searchGPT = () => {
    dispatch(toggleGPTView());
  };

  const updateLanguage = (ev) => {
    dispatch(changeLanguage(ev.target.value));
  };
  return (
    <div className="w-full h-16 absolute px-8 mb-2 bg-gradient-to-b from-black z-1 flex justify-between  z-10">
      <img src={NETFLIX_LOGO} alt="logo" className="w-20"></img>
      {user && (
        <div className="flex">
          {GPTView && (
            <select
              className="bg-blue-950 text-white px-2 py-1 m-2 rounded-lg"
              onChange={updateLanguage}
            >
              {supportingLanguages.map((lang) => (
                <option key={lang.identifier} value={lang.name}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 rounded-md text-white bg-blue-950"
            onClick={searchGPT}
          >
            {GPTView?"Homepage":"GPT Search"}
          </button>
          <img src={user.photoURL} alt="user img"></img>
          <button onClick={handleSignOut} className="bg-red-500 text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

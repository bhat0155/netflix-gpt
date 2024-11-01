import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log({ photo: user?.photoURL });
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        // console.log({ ekam: user });
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

    return ()=> unsubscribe;
  }, []);

  // console.log({ selector: user });
  const handleSignOut = () => {
    console.log("sign out button clicked")
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-full h-16 absolute px-8 my-2 bg-gradient-to-b from-black z-1 flex justify-between  z-10">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="w-20"
      ></img>
      {user && (
        <div className="flex">
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

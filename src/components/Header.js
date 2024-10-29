import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  console.log({ selector: user });
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-full h-16 absolute  px-8 my-2 bg-gradient-to-b from-black z-1 flex justify-between ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-20"
      ></img>
   {   user && <div className="flex">
        <img src={user.photoURL} alt="user img"></img>
        <button onClick={handleSignOut} className="bg-red-500 text-white">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;

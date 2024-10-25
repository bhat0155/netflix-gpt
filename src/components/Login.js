import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleLogIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/CA-en-20241021-TRIFECTA-perspective_1ad68852-bcff-466d-a52c-c2e9dca92760_large.jpg"
          alt="background-image"
        ></img>
      </div>
      <form className="w-3/12 p-12 bg-black bg-opacity-75 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white py-2 mx-2">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Name"
            className="m-1 p-2 bg-gray-700"
          ></input>
        )}

        <input
          type="text"
          placeholder="Email"
          className="m-1 p-2 bg-gray-700"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="m-1 p-2  bg-gray-700"
        ></input>
        <button className="m-1 px-20 my-4 py-2 bg-red-600 text-white rounded-lg block">
          {isSignedIn ? "Sign In" : "Join"}
        </button>
        <h2 className="text-white py-2 cursor-pointer" onClick={handleLogIn}>
          {isSignedIn
            ? "New here? Please Sign Up."
            : "Already a member? Please Sign Up"}
        </h2>
      </form>
    </div>
  );
};

export default Login;

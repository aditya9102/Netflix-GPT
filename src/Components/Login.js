import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form className=" absolute w-3/12 p-14 bg-black text-white  my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 ">
        <h1 className=" font-bold text-3xl py-4">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or Phone number"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        ></input>
        <button className="bg-red-700 w-full rounded-lg p-4 my-[28px]">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? SignUp Now"
            : " Already registed? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

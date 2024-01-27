import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSerachView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/ ");
      }
    });

    return () => unsubscibe();
  }, []);

  const handleGPTSearchClick = () => {
    //  Toggle GPT Search
    dispatch(toggleGPTSerachView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 m-4 bg-gray-800 text-white rounded-xl "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" py-2 px-2 my-4 mx-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Homepage" : "GPT Search"}
          </button>
          <img src={user.photoURL} alt="usericon" className="p-3 py-4 pr-2" />
          <button
            onClick={handleSignOut}
            className="  font-bold text-white pr-4"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

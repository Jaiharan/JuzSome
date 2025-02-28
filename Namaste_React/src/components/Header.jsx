import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav">
        <ul className=" flex justify-center align-center m-5 p-4 ">
          <li className=" p-2">Home</li>
          <li className=" p-2">About</li>
          <li className=" p-2">Contact</li>
          <li className=" p-2">Cart</li>
          <button
            className=" p-2 bg-black text-amber-50 rounded-2xl cursor-pointer"
            onClick={() => {
              loginStatus === "Login"
                ? setLoginStatus("Logout")
                : setLoginStatus("Login");
            }}
          >
            {loginStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

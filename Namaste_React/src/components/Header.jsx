import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav">
        <ul className=" flex justify-center align-center m-5 p-4 ">
          <li className=" p-2">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-2">
            <Link to="/about">About</Link>
          </li>
          <li className=" p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" p-2">
            <Link to="/cart">Cart</Link>
          </li>
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

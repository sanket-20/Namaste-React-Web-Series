import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  // let btnName = "Login";

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName = "Logout";
              setBtnName("Logout");
              // console.log(btnName);
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

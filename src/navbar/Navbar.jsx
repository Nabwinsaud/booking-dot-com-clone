import React from "react";
import "./Navbar.style.css";
import { BsQuestionCircle } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>Booking.com</span>
        </div>
        <div className="right-section">
          <ul className="items">
            <div className="currency">
              <span>NPR</span>
            </div>
            <div className="country-flag">
              <span>U.S</span>
            </div>
            <div className="question">
              <span>
                <BsQuestionCircle size={20} />
              </span>
            </div>
            <div className="property">
              <button>List your property</button>
            </div>
            <div className="register">
              <button>Register</button>
              <button>Login</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import Loader from "./Loader";
import { DetailsContext } from "../context/DetailsContext";
import logo from "../../Images/logo.png";
const Navbar = () => {
  const { connectWallet, account, handleChange, handleSubmit, isLoading } =
  useContext(DetailsContext);

  return (
    <div className="navbar">
      <nav>
        <div className="nav_logo_container">
         <h1>Metacrafters Assessment 2</h1>
        </div>

        <ul>
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
          {!account && (
            <button className="btn connect-btn" onClick={connectWallet}>
              Connect Account
            </button>
          )}
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

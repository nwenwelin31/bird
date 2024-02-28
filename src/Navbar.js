import React from "react";
import { Link } from "react-router-dom";
import birdLogo from "./bird-logo.jpg";
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg fixed-top bg-black">
      <div className="container-fluid">
        <img src={birdLogo} alt="logo" style={{ width: "5rem" }} />
        <div className="d-flex">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> */}
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            {/* </li>
            <li className="nav-item"> */}
              <Link className="nav-link" to="/birdlist">
                Birds
              </Link>
            {/* </li>
          </ul> */}
        </div>
        <div>
          <Link to="/" className="btn btn-secondary">
            Let's Fly
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

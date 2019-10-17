import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

export const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img width="40" src={Logo} alt="" />
          <span className="nav-title">Talkin</span>
        </Link>
      </div>
    </nav>
  </header>
);

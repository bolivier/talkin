import React from "react";
import Logo from "../img/logo.png";


export const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img width="40" src={Logo} alt="" />
          <span className="nav-title">Talkin</span>
        </a>
      </div>
    </nav>
  </header>
);

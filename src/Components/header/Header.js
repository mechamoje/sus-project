import React from "react";
import Emi from "../../images/emilogo.png";
import Letters from "../../images/letters.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img className="header-logo-img" src={Emi} alt="loading..." />
      </a>
      <a href="/">
        <img className="header-letter-img" src={Letters} alt="loading..." />
      </a>
      <a href="/" className="home-btn"> Início </a>
    </header>
  );
}

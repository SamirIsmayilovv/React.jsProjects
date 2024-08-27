import { useState } from "react";
import logo from "../assets/logo.png";
import "../components/Header.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img className="hidden" src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}





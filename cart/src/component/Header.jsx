import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toggleable Heart Icon</h1>
        <Link to="/wishlist">Go to Wishlist</Link>
        <Heartbutton />
        <FaHeart />
      </header>
    </div>
  );
}

export default Header;

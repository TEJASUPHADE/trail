import React from "react";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <input type="search" placeholder="Search for something" />
      <div className="profile">
        <img src="/images/profile.jpg" alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;

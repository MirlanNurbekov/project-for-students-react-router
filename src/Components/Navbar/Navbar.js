import React from 'react';
import './Navbar.css'; // Make sure the path to your CSS file is correct

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="active">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/buttonspage">Buttons</a>
    </div>
  );
}

export default Navbar;
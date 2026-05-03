import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <button className="menu-btn">
          <span className="menu-text">MENU</span>
          <span className="menu-badge">0</span>
        </button>
      </div>
      
      <div className="nav-center">
        <div className="logo-box">
          <h1>THE HOUZ</h1>
          <p>Kitchen and Bar</p>
        </div>
      </div>
      
      <div className="nav-right">
        <button className="reserve-btn">
          <span className="dot">•</span> RESERVE <span className="dot">•</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setHomeDropdownOpen(!homeDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>TRIPS & SHIPS</div>

      <div className="nav-links">
        <div className="nav-dropdown-wrapper">
          <Link to="/" className="nav-dropdown-trigger">HOME <i className="fas fa-angle-down"></i></Link>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-group">
              <span className="nav-dropdown-title">ANTARCTICA</span>
              <Link to="/antarctica-cruise-cost">Antarctica Cruise Cost</Link>
              <Link to="/scenic-antarctica-cruise">Scenic Antarctica Cruises</Link>
              <Link to="/scenic-vs-silversea-antarctica">Scenic vs Silversea Antarctica</Link>
              <Link to="/ScenicvsEmeraldYachts">Scenic vs Emerald Yachts</Link>
              <Link to="/DrakePassagePage">The Drake Passage</Link>
            </div>
            <Link to="/luxury-travel" className="nav-dropdown-single">LUXURY TRAVEL</Link>
          </div>
        </div>
        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
      </div>

      <div className="nav-right">
        <button className="nav-btn">CONTACT</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>

        <div className="mobile-dropdown-wrapper">
          <div className="mobile-dropdown-trigger" onClick={toggleHomeDropdown}>
            HOME <i className={`fas fa-angle-${homeDropdownOpen ? "up" : "down"}`}></i>
          </div>
          <div className={`mobile-dropdown-menu ${homeDropdownOpen ? "active" : ""}`}>
            <span className="mobile-dropdown-title">ANTARCTICA</span>
            <Link to="/antarctica-cruise-cost" onClick={toggleMenu}>Antarctica Cruise Cost</Link>
            <Link to="/scenic-antarctica-cruise" onClick={toggleMenu}>Scenic Antarctica Cruises</Link>
            <Link to="/scenic-vs-silversea-antarctica" onClick={toggleMenu}>Scenic vs Silversea Antarctica</Link>
            <Link to="/ScenicvsEmeraldYachts" onClick={toggleMenu}>Scenic vs Emerald Yachts</Link>
            <Link to="/DrakePassagePage" onClick={toggleMenu}>The Drake Passage</Link>
            <span className="mobile-dropdown-divider"></span>
            <Link to="/luxury-travel" onClick={toggleMenu} className="mobile-dropdown-single">LUXURY TRAVEL</Link>
          </div>
        </div>

        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
        <button className="nav-btn">CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;

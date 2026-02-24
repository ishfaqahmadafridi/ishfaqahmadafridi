import React from "react";
import { useHeaderState } from "../hooks/header";
import "../../styles/Header.css";

export default function Header({ setPage, cartItemCount }) {
  const { theme, isMenuOpen, toggleTheme, toggleMenu } = useHeaderState();

  return (
    <div className={`header-container ${theme}`}>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="left-links">
          <span>WELCOME TO AFRIDI'S</span>
          <ul className="top-nav">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setPage("signin"); }}>
                SIGN IN
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setPage("tracking"); }}>
                TRACKING INFO
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setPage("register"); }}>
                CREATE AN ACCOUNT
              </a>
            </li>
          </ul>
        </div>
        <div className="right-icons">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a href="#" className="cart-icon" onClick={(e) => { e.preventDefault(); setPage("cart"); }}>
            🛒 ({cartItemCount})
          </a>
          <a href="#" className="search-icon" onClick={(e) => { e.preventDefault(); setPage("search"); }}>
            🔍 SEARCH
          </a>
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Logo and Main Navigation */}
      <div className="main-nav">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
          AFRIDI'S
        </a>
        <ul className={`nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("women"); }}>WOMEN</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("man"); }}>MEN</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("boysgirlscat"); }}>BOYS & GIRLS</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("fragrances"); }}>FRAGRANCES</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("makeup"); }}>MAKEUP</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("skincare"); }}>SKINCARE</a></li>
          <li><a href="#" className="highlight-red" onClick={(e) => { e.preventDefault(); setPage("sale"); }}>SALE</a></li>
        </ul>
      </div>
    </div>
  );
}

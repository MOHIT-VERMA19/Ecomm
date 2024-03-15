import React from 'react';
import '../styles/navbar.scss';
import searchIcon from '../assets/icons8-search.svg'; // Import the search icon

const Navbar = ({ items }) => {
  const visibleItems = items.slice(0, 7); // Show only the top 7 items
  const hiddenItems = items.slice(7); // Items beyond the top 7

  return (
    <nav className="navbar">
      <div className="left">
        <span className="logo">E-COMM</span>
        <ul className="visible-items">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
          {hiddenItems.length > 0 && (
            <li className="more">
              <a href="#">MORE </a>
              <ul className="hidden-items">
                {hiddenItems.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
      <div className="right">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search something" className="search-input" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

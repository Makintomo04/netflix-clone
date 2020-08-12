import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 25 ? handleShow(true) : handleShow(false)
    );
  }, []);

  return (
    <nav className={`${show && "show--banner"}`}>
      <div className="nav__fade"></div>
      <div className="left">
        <div className="logo">
          <img
            style={{ height: "25px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </div>
        <ul className="nav--links">
          <li>
            <a className="active" href="./">
              Home
            </a>
          </li>
          <li>
            <a href="./">Series</a>
          </li>
          <li>
            <a href="./">Films</a>
          </li>
          <li>
            <a href="./">Latest</a>
          </li>
          <li>
            <a href="./">My List</a>
          </li>
        </ul>
        <a class="mobile__nav" href="#">
          Browse <i className="fas fa-sort-down"></i>
        </a>
      </div>
      <ul className="extra">
        <li>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li>
          <a href="#">CHILDREN</a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-gift"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-bell"></i>
          </a>
        </li>
        <li>
          <img
            className="avatar"
            src="https://occ-0-1682-299.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABXls-8XS8XxEpJUe7lIDnbRYI_zMx3rKPM6ilE2iWIzQ4q9G-8I_QWyKSLl4ewHDPqMEDO6kw9uypOzbmDKee2uwgWF8.png?r=76b"
            alt="Netflix User Avatar"
          />
          <i className="fas fa-sort-down profile-dropdown"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

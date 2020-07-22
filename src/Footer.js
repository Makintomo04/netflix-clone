import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-links">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </div>
        <div className="top-level">
          <div className="one">
            <ul>
              <li>
                <a>Audio Subtitles</a>
              </li>
              <li>
                <a>Media Centre</a>
              </li>
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
            <a className="footer-btn" href="">
              Service Code
            </a>
          </div>
          <div className="two">
            <ul>
              <li>
                <a>Audio Description</a>
              </li>
              <li>
                <a>Investor Relations</a>
              </li>
              <li>
                <a>Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="three">
            <ul>
              <li>
                <a>Help Centre</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Cookie Preferences</a>
              </li>
            </ul>
          </div>

          <div className="four">
            <ul>
              <li>
                <a>Gift Cards</a>
              </li>
              <li>
                <a>Terms of Use</a>
              </li>
              <li>
                <a>Corporate Information</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-level">
          <p>© 1997-2020 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

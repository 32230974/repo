import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="hero" smooth duration={500} className="back-to-top">
          <FaArrowUp />
        </Link>

        <div className="footer-content">
          <div className="footer-brand">
            <h3>&lt;MA /&gt;</h3>
            <p>Full Stack Developer building modern web experiences.</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed & Built with <FaHeart className="heart-icon" /> by Mohammad Ayoub
          </p>
          <p className="footer-year">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

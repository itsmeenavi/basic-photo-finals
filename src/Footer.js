// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {currentYear} Coded by Ivhan Salazar.
      </p>
    </footer>
  );
}

export default Footer;

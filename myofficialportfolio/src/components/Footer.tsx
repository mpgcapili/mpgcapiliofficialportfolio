import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

    <>
      <footer>
        <div className="footer-credit">
          <p>
            Designed & Coded by @MPGCAPILI
          </p>
          <div >
            <span>© {currentYear} All rights reserved.</span>
          </div>
        </div>
        <div className='footer-links'>
          <a href="">LinkedIn</a>
          <a href="">MPGCAPILI@GMAIL.COM</a>
        </div>

      </footer>
    </>
  )
}

export default Footer
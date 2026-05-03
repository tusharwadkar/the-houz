import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-main">
        {/* Left Character */}
        <div className="footer-char-left">
          <img src="/amrish-puri.png" alt="Amrish Puri" />
        </div>

        {/* Center Content */}
        <div className="footer-center">
          <div className="footer-title">
            <span className="text-black">AAO KABHI</span>
            <div className="footer-title-row">
              <span className="text-highlight">THE HOUZ</span>
              <span className="text-black pe-text"> PE!!!</span>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Character */}
        <div className="footer-char-right">
          <img src="/amithab.png" alt="Amitabh Bachchan" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          <p>COPYRIGHT &copy; THE HOUZ 2026</p>
          <p>This is only for Design or Demo purpose</p>
        </div>

        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

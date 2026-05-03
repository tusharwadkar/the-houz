import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
              y: 50,
              opacity: 0,
              duration: 1.2,
              ease: "power3.out"
            });
            
            gsap.from(rightRef.current, {
              x: 50,
              opacity: 0,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.3
            });
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        
        {/* Left Column */}
        <div className="contact-left" ref={leftRef}>
          <div className="contact-phone-wrapper">
            <img src="/Telephone-removebg-preview.png" alt="Vintage Telephone" className="vintage-phone-img" />
          </div>
          
          <div className="contact-queries">
            <div className="query-block">
              <h3 className="query-title">PHONE:</h3>
              <p className="query-text">
                <span className="query-highlight">099201 04299</span>
              </p>
            </div>
            
            <div className="query-block">
              <h3 className="query-title">RESERVATIONS:</h3>
              <p className="query-text">
                <span className="query-highlight">eazydiner.com, swiggy.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right" ref={rightRef}>
          <h2 className="contact-main-title">CONTACT US</h2>
          
          <div className="contact-address-block">
            <div className="address-header">
              <svg className="pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h3 className="address-title">THE HOUZ, NAVI MUMBAI</h3>
            </div>
            <p className="address-text">
              Plot No.02, Sector Number 6 Rd,<br />
              Sector 5, Ghansoli E, Ghansoli,<br />
              Navi Mumbai, Maharashtra 400701.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

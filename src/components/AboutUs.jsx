import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// Optional: import ScrollTrigger if we want to trigger on scroll
// But for now, simple intersection observer or just run on mount if it's near the top.
// Since we don't have ScrollTrigger installed or set up, we'll use a simple IntersectionObserver

const AboutUs = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let ctx = gsap.context(() => {
            gsap.from(leftColRef.current, {
              y: 50,
              opacity: 0,
              duration: 1.5,
              ease: "power3.out"
            });
            gsap.from(rightColRef.current, {
              x: 50,
              opacity: 0,
              duration: 1.5,
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
    <section className="about-section" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-left" ref={leftColRef}>
          <div className="about-red-box">
            <div className="about-subtitle-wrapper">
              <span className="about-subtitle">GET TO KNOW US</span>
              <div className="about-subtitle-line"></div>
            </div>
            <h2 className="about-title">
              WHO<br />ARE WE
            </h2>
          </div>
          
          <div className="about-text-content">
            <div className="drop-cap-wrapper">
              <span className="drop-cap">W</span>
            </div>
            <p className="about-paragraph">
              e're a team of food lovers, storytellers, and detail-obsessed dreamers who care deeply about every plate that leaves the kitchen. Behind every dish is a conversation, a memory, a moment worth sharing. We believe in warmth that goes beyond the food, in creating spaces where people slow down, connect, and feel at home.
            </p>
          </div>
        </div>

        <div className="about-right" ref={rightColRef}>
          <div className="about-image-wrapper">
            <img src="/about-img.png" alt="A beautiful appetizer plate" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

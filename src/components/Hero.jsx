import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const massiveTextRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const marquee = marqueeInnerRef.current;
      
      // Animate the marquee inner container
      gsap.to(marquee, {
        xPercent: -50, // Move left by exactly half the total width
        duration: 15,
        ease: "none",
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="hero-section">
      <div className="hero-text-container">
        <div className="marquee-inner" ref={marqueeInnerRef}>
          <h2 className="massive-text" ref={massiveTextRef}>
            THE HOUZ <span className="diamond-icon"></span> THE HOUZ <span className="diamond-icon"></span> THE HOUZ <span className="diamond-icon"></span>
          </h2>
          <h2 className="massive-text">
            THE HOUZ <span className="diamond-icon"></span> THE HOUZ <span className="diamond-icon"></span> THE HOUZ <span className="diamond-icon"></span>
          </h2>
        </div>
      </div>

      <div className="hero-image-container">
        <img src="/the-houze-img.webp" alt="A person dining" className="hero-image" />
        <div className="hero-image-info">
          <p>
            The kind of place that feels effortlessly polished without ever becoming formal, with seasonal Italian plates, a lively crowd, and the sort of warm Roman energy that keeps the night going.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;

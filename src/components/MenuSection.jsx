import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuSection = () => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  // Array of images
  const images = [
    "/unnamed.jpg",
    "/unnamed (1).jpg",
    "/unnamed (2).jpg",
    "/unnamed (3).jpg",
    "/unnamed (4).jpg",
    "/unnamed (5).jpg"
  ];

  // We need enough images to fill the screen twice to loop seamlessly
  // Let's create an array that repeats the images to ensure it's wide enough
  const sliderItems = [...images, ...images];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Top slider moves Right to Left (xPercent goes to -50)
      gsap.to(topSliderRef.current, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1
      });

      // Bottom slider moves Left to Right. We start at -50% and move to 0%
      // So we set initial state first
      gsap.set(bottomSliderRef.current, { xPercent: -50 });
      gsap.to(bottomSliderRef.current, {
        xPercent: 0,
        duration: 25,
        ease: "none",
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2 className="menu-title">
          MERE <span className="menu-highlight">MENU</span> AAYENGE...
        </h2>
      </div>

      <div className="sliders-container">
        {/* Top Slider (Right to Left) */}
        <div className="slider-track">
          <div className="slider-inner" ref={topSliderRef}>
            {/* First Set */}
            <div className="slider-group">
              {sliderItems.map((src, i) => (
                <div key={`top1-${i}`} className="menu-img-wrapper">
                  <img src={src} alt={`Menu item ${i + 1}`} className="menu-img" />
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="slider-group">
              {sliderItems.map((src, i) => (
                <div key={`top2-${i}`} className="menu-img-wrapper">
                  <img src={src} alt={`Menu item duplicate ${i + 1}`} className="menu-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Slider (Left to Right) */}
        <div className="slider-track">
          <div className="slider-inner" ref={bottomSliderRef}>
             {/* First Set */}
             <div className="slider-group">
              {/* Reverse the images just for visual variety on the bottom track */}
              {[...sliderItems].reverse().map((src, i) => (
                <div key={`bot1-${i}`} className="menu-img-wrapper">
                  <img src={src} alt={`Menu item ${i + 1}`} className="menu-img" />
                </div>
              ))}
            </div>
            {/* Second Set */}
            <div className="slider-group">
              {[...sliderItems].reverse().map((src, i) => (
                <div key={`bot2-${i}`} className="menu-img-wrapper">
                  <img src={src} alt={`Menu item duplicate ${i + 1}`} className="menu-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

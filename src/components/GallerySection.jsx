import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GallerySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);

  const images = [
    "/unnamed (6).jpg",
    "/unnamed (7).jpg",
    "/2025-03-12.jpg",
    "/2025-04-18.jpg",
    "/2025-04-18 (1).jpg",
    "/2025-04-18 (2).jpg",
    "/2025-09-25.jpg"
  ];

  // Duplicate for seamless infinite loop
  const sliderItems = [...images, ...images];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let ctx = gsap.context(() => {
            gsap.from(titleRef.current.children, {
              y: 50,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out"
            });
            
            // Continuous infinite scroll animation for the slider
            gsap.to(sliderRef.current, {
              xPercent: -50,
              duration: 35,
              ease: "none",
              repeat: -1
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
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        
        <div className="gallery-title-wrapper" ref={titleRef}>
          <h2 className="gallery-title-main">
            PICTURE
          </h2>
          <h2 className="gallery-title-sub">
            TOH ABHI<br />BAKI HAI<br />MERE DOST!!
          </h2>
        </div>

        <div className="gallery-slider-window">
          <div className="gallery-slider-inner" ref={sliderRef}>
            {/* First Set */}
            <div className="gallery-slider-group">
              {sliderItems.map((src, idx) => (
                <div 
                  key={`gal-${idx}`} 
                  className={`gallery-frame ${idx % 2 === 0 ? 'frame-odd' : 'frame-even'}`}
                >
                  <img src={src} alt={`Gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;

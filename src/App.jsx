import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {


      gsap.from(".nav-left, .nav-center, .nav-right", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });

      gsap.from(".massive-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8
      });



      gsap.from(".hero-image", {
        scale: 1.3,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1.5
      });

      gsap.from(".hero-image-info", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 2
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-wrapper" ref={wrapperRef}>
      <Navbar />
      <Hero />
      <AboutUs />
      <MenuSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

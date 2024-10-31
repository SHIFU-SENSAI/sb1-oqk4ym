import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      smartphone: { smooth: true, breakpoint: 767 },
      tablet: { smooth: true, breakpoint: 1024 }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main data-scroll-container className="bg-black">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
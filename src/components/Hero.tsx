import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Gamepad2, Code, Trophy, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const text = new SplitType(headingRef.current!, { types: 'chars' });
    const chars = text.chars;

    gsap.fromTo(chars,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out"
      }
    );

    gsap.fromTo(containerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden pt-16">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.1)_0,rgba(0,0,0,1)_100%)]" />
      
      <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold mb-6 relative z-10 text-transparent bg-clip-text text-white">
        Siftain Ahmad
      </h1>

      <div ref={containerRef} className="text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Gamepad2 className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-light">Game Developer</span>
          <span className="mx-2">|</span>
          <Code className="w-8 h-8 text-cyan-500" />
          <span className="text-2xl font-light">Competitive Programmer</span>
        </div>

        <div className="flex gap-6 mb-12">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span className="text-lg text-gray-300">Top 1% on CodeForces</span>
        </div>

        <div className="flex gap-6 justify-center">
        </div>
      </div>
    </div>
  );
}

export default Hero;
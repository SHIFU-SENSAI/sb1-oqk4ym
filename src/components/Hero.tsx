import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Gamepad2, Code, Trophy } from 'lucide-react';

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
        duration: 0.5,
        delay: 0.5,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff0d,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold mb-6 relative z-10 text-transparent bg-clip-text text-white">
          SIFTAIN AHMAD
        </h1>

        <div className="flex items-center justify-center gap-4 mb-4">
          <Gamepad2 className="w-7 h-7 text-purple-500 animate-[spin_1s_ease-in-out]" />
          <span className="text-2xl font-light">Game Developer</span>
          <span className="mx-2">|</span>
          <Code className="w-7 h-7 text-cyan-500 animate-[spin_1s_ease-in-out]" />
          <span className="text-2xl font-light">Competitive Programmer</span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Trophy className="w-6 h-6 text-yellow-500 animate-[spin_1s_ease-in-out]" />
          <span className="text-2xl font-light">Top 1% on CodeForces</span>
        </div>

        <div className="flex gap-6 justify-center">
        </div>
      </div>
    </div>
  );
}

export default Hero;
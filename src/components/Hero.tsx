import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Gamepad2, Code, Trophy } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

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

    // Background animation
    const circles = Array.from({ length: 20 }).map((_, i) => {
      const circle = document.createElement('div');
      circle.className = `absolute rounded-full bg-gradient-to-br 
        ${i % 3 === 0 ? 'from-purple-500/20 to-cyan-500/20' : 
          i % 3 === 1 ? 'from-cyan-500/20 to-yellow-500/20' : 
          'from-yellow-500/20 to-purple-500/20'}`;
      
      const size = Math.random() * 200 + 100; // Random size between 100-300px
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      
      backgroundRef.current?.appendChild(circle);
      return circle;
    });

    circles.forEach((circle) => {
      gsap.set(circle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(circle, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 400 - 200}`,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      circles.forEach(circle => circle.remove());
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        ref={backgroundRef} 
        className="absolute inset-0 overflow-hidden blur-3xl"
        style={{ filter: 'blur(120px)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold mb-6 relative z-10 text-transparent bg-clip-text text-white">
            SIFTAIN AHMAD
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <Gamepad2 className="w-7 h-7 text-purple-500 animate-[spin_1s_ease-in-out]" />
            <span className="text-2xl font-light">Game Developer</span>
            <span className="mx-2">|</span>
            <Code className="w-7 h-7 text-cyan-500 animate-[spin_1s_ease-in-out]" />
            <span className="text-2xl font-light">Competitive Programmer</span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
            <Trophy className="w-6 h-6 text-yellow-500 animate-[spin_1s_ease-in-out]" />
            <span className="text-2xl font-light">Top 1% on CodeForces</span>
          </div>
        </div>
        <div className="hidden lg:block translate-x-10">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white/10">
            <img 
              src="/src/assets/kakashi.jpg" 
              alt="Dazai Kakashi"
              className="w-full h-full object-cover object-[center_top]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
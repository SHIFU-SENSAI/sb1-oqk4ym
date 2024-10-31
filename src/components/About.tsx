import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Trophy, Brain, Gamepad } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray('.animate-in');
    
    elements.forEach((element: any) => {
      gsap.fromTo(element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div id="about" className="min-h-screen bg-black text-white py-20 px-4 md:px-20">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center animate-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-in">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate game developer and competitive programmer with a deep love for creating immersive experiences and solving complex algorithmic challenges. With expertise in both game development and competitive programming, I bring a unique blend of creative and analytical skills to every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in competitive programming has led me to rank in the top 1% on CodeForces, while my game development projects have allowed me to explore the intersection of creativity and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-in">
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
              <Gamepad className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Game Dev</h3>
              <p className="text-gray-400">Creating immersive gaming experiences</p>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/20">
              <Code2 className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Programming</h3>
              <p className="text-gray-400">Expert in multiple languages</p>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-xl border border-yellow-500/20">
              <Trophy className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Competitive</h3>
              <p className="text-gray-400">Top 1% on CodeForces</p>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/20">
              <Brain className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-gray-400">Advanced algorithmic thinking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
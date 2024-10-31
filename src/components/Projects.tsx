import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projects = gsap.utils.toArray('.project-card');
    
    projects.forEach((project: any) => {
      gsap.fromTo(project,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={projectsRef} className="min-h-screen bg-black text-white py-20 px-4 md:px-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
        FEATURED PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="project-card bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Epic Adventure Game</h3>
          <p className="text-gray-300 mb-4">
            A stunning 3D adventure game built with Unreal Engine. Features dynamic combat system and procedurally generated worlds.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Unity</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">C#</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Blueprint</span>
          </div>
        </div>

        <div className="project-card bg-gradient-to-br from-cyan-900/30 to-black p-8 rounded-xl backdrop-blur-sm border border-cyan-500/20">
          <h3 className="text-2xl font-bold mb-4">AI Chess Engine</h3>
          <p className="text-gray-300 mb-4">
            Advanced chess engine utilizing minimax algorithm with alpha-beta pruning. Ranked in top competitive programming contests.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">C++</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">AI</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">Algorithms</span>
          </div>
        </div>

        <div className="project-card bg-gradient-to-br from-emerald-900/30 to-black p-8 rounded-xl backdrop-blur-sm border border-emerald-500/20">
          <h3 className="text-2xl font-bold mb-4">Smart Home IoT Platform</h3>
          <p className="text-gray-300 mb-4">
            A scalable IoT platform for home automation. Features real-time monitoring, automated routines, and mobile app control.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm">React Native</span>
            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm">MQTT</span>
          </div>
        </div>

        <div className="project-card bg-gradient-to-br from-rose-900/30 to-black p-8 rounded-xl backdrop-blur-sm border border-rose-500/20">
          <h3 className="text-2xl font-bold mb-4">ML-Powered Financial Analyzer</h3>
          <p className="text-gray-300 mb-4">
            Financial analysis tool using machine learning to predict market trends and provide investment insights.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-rose-500/20 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-rose-500/20 rounded-full text-sm">TensorFlow</span>
            <span className="px-3 py-1 bg-rose-500/20 rounded-full text-sm">FastAPI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
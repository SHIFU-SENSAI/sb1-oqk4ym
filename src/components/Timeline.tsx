import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    date: "2021 - Present",
    title: "Game Developer",
    description: "Leading game development projects using Unity",
    type: "work"
  },
  {
    date: "2023 - 2027",
    title: "Computer Science Degree",
    description: "Bachelor's in Computer Science with focus on game development",
    type: "education"
  },
  // Add more items as needed
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<Element>('.timeline-item');
      
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: 70,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    }, timelineRef);

    const circles = Array.from({ length: 20 }).map((_, i) => {
      const circle = document.createElement('div');
      circle.className = `absolute rounded-full bg-gradient-to-br 
        ${i % 3 === 0 ? 'from-purple-500/20 to-cyan-500/20' : 
          i % 3 === 1 ? 'from-cyan-500/20 to-yellow-500/20' : 
          'from-yellow-500/20 to-purple-500/20'}`;
      
      const size = Math.random() * 200 + 100;
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
      ctx.revert();
      circles.forEach(circle => circle.remove());
    };
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6 text-purple-500" />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-cyan-500" />;
      default:
        return <Calendar className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <section className="relative py-20 px-4" id="journey">
      {/* Background */}
      <div 
        ref={backgroundRef} 
        className="absolute inset-0 overflow-hidden blur-3xl"
        style={{ filter: 'blur(120px)' }}
      />
      {/* Add gradient overlay at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text text-white">
          MY JOURNEY
        </h2>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-yellow-500" />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item relative flex gap-8 mb-12 last:mb-0"
            >
              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border border-gray-700">
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 
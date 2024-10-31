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
    date: "2023 - Present",
    title: "Senior Game Developer",
    description: "Leading game development projects using Unity and Unreal Engine",
    type: "work"
  },
  {
    date: "2020 - 2023",
    title: "Computer Science Degree",
    description: "Bachelor's in Computer Science with focus on game development",
    type: "education"
  },
  // Add more items as needed
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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

    return () => ctx.revert();
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
    <section className="py-20 px-4 bg-gray-400">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text text-white">
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
import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import NavMenu from './NavMenu';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [scrambledText, setScrambledText] = useState("DEVELOPER ARENA");
  const [isScrambling, setIsScrambling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
      setIsOpen(false);
    } else {
      setIsVisible(true);
    }
  });

  const scrambleText = () => {
    if (isScrambling) return;
    
    const originalText = "DEVELOPER ARENA";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const maxIterations = 10;
    
    setIsScrambling(true);
    
    const interval = setInterval(() => {
      setScrambledText(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            return Math.random() < iterations / maxIterations ? 
              originalText[index] : 
              characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iterations += 1;
      
      if (iterations === maxIterations) {
        clearInterval(interval);
        setScrambledText(originalText);
        setIsScrambling(false);
      }
    }, 50);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <motion.header 
      className="fixed w-full top-0 left-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div 
                className="flex flex-col text-white cursor-pointer"
                onMouseEnter={scrambleText}
              >
                <motion.span 
                  className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {scrambledText}
                </motion.span>
                <span className="font-medium text-sm text-gray-400">WEB DEV</span>
              </div>
            </motion.div>

            <motion.button
              ref={buttonRef}
              className="relative z-10 w-12 h-12 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col gap-1.5">
                <motion.div
                  className="w-6 h-0.5 bg-white"
                  animate={{ 
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0
                  }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-white"
                  animate={{ 
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0
                  }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-white"
                  animate={{ 
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        <NavMenu isOpen={isOpen} onNavClick={handleNavClick} />
      </div>
    </motion.header>
  );
};

export default Navbar;
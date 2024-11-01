import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsOpen(false); // Close menu when hiding navbar
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      gsap.to(buttonRef.current, {
        rotation: 180,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to(buttonRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [isHovered]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false); // Close menu after clicking
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <motion.div 
      className="fixed w-full top-0 left-0 p-6 bg-black backdrop-blur-sm z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    > 
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-white">
            <span className="font-bold text-lg">DEVELOPER ARENA</span>
            <span className="font-medium text-sm">WEB DEV</span>
          </div>

          <motion.button
            ref={buttonRef}
            className="flex flex-col justify-center items-center w-12 h-12"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col gap-1.5">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}></div>
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 left-0 bg-black backdrop-blur-sm"
          >
            <nav className="py-2">
              {['Home', 'About', 'Projects', 'Journey'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="block px-4 py-2 text-white transition-colors"
                  whileHover={{ 
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 3,
                      mass: 0.8,
                      velocity: 2
                    }
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
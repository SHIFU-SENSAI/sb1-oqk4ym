import { motion } from 'framer-motion';
import NavLink from './NavLink';

interface NavMenuProps {
  isOpen: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50%)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const NavMenu = ({ isOpen, onNavClick }: NavMenuProps) => {
  const menuItems = ['Home', 'About', 'Projects', 'Journey'];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="absolute top-full right-0 left-0 bg-black/95 backdrop-blur-lg border-t border-white/10"
    >
      <nav className="max-w-7xl mx-auto py-4">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => onNavClick(e, item.toLowerCase())}
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default NavMenu;
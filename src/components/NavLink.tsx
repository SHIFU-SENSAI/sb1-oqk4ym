import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

const NavLink = ({ href, onClick, children }: NavLinkProps) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="relative block px-4 py-2 text-white transition-colors group"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};

export default NavLink;
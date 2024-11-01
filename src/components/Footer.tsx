import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, X } from 'lucide-react';
import SocialLink from './SocialLink';
import ScrollToTop from './ScrollToTop';
const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/SHIFU-SENSAI",
      icon: Github,
      label: "GitHub Profile"
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn Profile"
    },
    {
      href: "https://twitter.com",
      icon: X,
      label: "Twitter Profile"
    },
    {
      href: "mailto:ahmadsiftain89@gmail.com",
      icon: Mail,
      label: "Email Contact"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20" />
      
      {/* Glowing lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),transparent)]" />
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              DEVELOPER ARENA
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="mb-2">
                Crafted with passion and precision
              </p>
              <p>
                © {currentYear} Siftain Ahmad. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
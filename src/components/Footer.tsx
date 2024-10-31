import { Github, Linkedin, Mail, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/SHIFU-SENSAI"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="w-6 h-6" />
            </a>
            <a
              href="mailto:ahmadsiftain89@gmail.com"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              target="_blank"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Siftain Ahmad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
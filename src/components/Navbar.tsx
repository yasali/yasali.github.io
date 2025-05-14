import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FaYoutube, FaFacebook, FaMedium } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
              Yasir Ali
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#cv">Resume</NavLink>
            <SocialLink href="#youtube" icon={<FaYoutube className="h-5 w-5 text-red-600" />} />
            <SocialLink href="#facebook" icon={<FaFacebook className="h-5 w-5 text-blue-600" />} />
            <SocialLink href="#medium" icon={<FaMedium className="h-5 w-5 text-gray-800" />} />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={cn("h-6 w-6", isMenuOpen ? "hidden" : "block")}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={cn("h-6 w-6", isMenuOpen ? "block" : "hidden")}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1 px-2 bg-white border-b border-gray-200">
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#cv">CV</MobileNavLink>
          <MobileNavLink href="#youtube">
            <div className="flex items-center space-x-2">
              <FaYoutube className="h-5 w-5 text-red-600" />
              <span>YouTube</span>
            </div>
          </MobileNavLink>
          <MobileNavLink href="#facebook">
            <div className="flex items-center space-x-2">
              <FaFacebook className="h-5 w-5 text-blue-600" />
              <span>Facebook</span>
            </div>
          </MobileNavLink>
          <MobileNavLink href="#medium">
            <div className="flex items-center space-x-2">
              <FaMedium className="h-5 w-5 text-gray-800" />
              <span>Medium</span>
            </div>
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
  >
    {icon}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="block pl-3 pr-4 py-2 font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
    onClick={() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {children}
  </a>
);

export default Navbar;

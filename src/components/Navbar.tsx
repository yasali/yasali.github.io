
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-primary">
              Yasir Ali
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#cv">Resume</NavLink>
            <NavLink href="#youtube">YouTube</NavLink>
            <NavLink href="#facebook">Facebook</NavLink>
            <NavLink href="#medium">Medium</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
          <MobileNavLink href="#youtube">YouTube</MobileNavLink>
          <MobileNavLink href="#facebook">Facebook</MobileNavLink>
          <MobileNavLink href="#medium">Medium</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300"
  >
    {children}
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

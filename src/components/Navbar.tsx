import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FaYoutube, FaFacebook, FaMedium } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSocialLink = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold font-playfair tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent hover:from-gray-800 hover:to-gray-700 transition-all duration-300">
              Yasir Ali
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/resume">Resume</NavLink>
            {/*<SocialLink onClick={() => handleSocialLink('youtube')} icon={<FaYoutube className="h-5 w-5 text-red-600" />} /> */}
            {/*<SocialLink onClick={() => handleSocialLink('facebook')} icon={<FaFacebook className="h-5 w-5 text-blue-600" />} /> */}
            <SocialLink onClick={() => handleSocialLink('medium')} icon={<FaMedium className="h-5 w-5 text-gray-800" />} />
            <button 
              onClick={() => handleSocialLink('about')}
              className="font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group font-inter"
            >
              About
              <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 w-0 group-hover:w-full"></span>
            </button>
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
          <MobileNavLink href="/resume">Resume</MobileNavLink>
          <MobileSocialLink onClick={() => handleSocialLink('youtube')}>
            <div className="flex items-center space-x-2">
              <FaYoutube className="h-5 w-5 text-red-600" />
              <span>YouTube</span>
            </div>
          </MobileSocialLink>
          <MobileSocialLink onClick={() => handleSocialLink('facebook')}>
            <div className="flex items-center space-x-2">
              <FaFacebook className="h-5 w-5 text-blue-600" />
              <span>Facebook</span>
            </div>
          </MobileSocialLink>
          <MobileSocialLink onClick={() => handleSocialLink('medium')}>
            <div className="flex items-center space-x-2">
              <FaMedium className="h-5 w-5 text-gray-800" />
              <span>Medium</span>
            </div>
          </MobileSocialLink>
          <button
            onClick={() => handleSocialLink('about')}
            className="w-full text-left pl-3 pr-4 py-2 font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === href || location.hash === href;
  
  return (
    <Link 
      to={href}
      className={cn(
        "font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group",
        isActive && "text-blue-600"
      )}
    >
      {children}
      <span className={cn(
        "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
        isActive ? "w-full" : "w-0 group-hover:w-full"
      )}></span>
    </Link>
  );
};

const SocialLink = ({ onClick, icon }: { onClick: () => void; icon: React.ReactNode }) => (
  <button 
    onClick={onClick}
    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
  >
    {icon}
  </button>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === href || location.hash === href;
  
  return (
    <Link 
      to={href}
      className={cn(
        "block pl-3 pr-4 py-2 font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300",
        isActive && "text-blue-600 bg-gray-50"
      )}
    >
      {children}
    </Link>
  );
};

const MobileSocialLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="w-full text-left pl-3 pr-4 py-2 font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
  >
    {children}
  </button>
);

export default Navbar;

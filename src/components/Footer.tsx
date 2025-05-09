
import { Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yasir Ali</h3>
            <p className="text-gray-300 mb-4">
              Sr. Software Engineer
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.youtube.com/" ariaLabel="YouTube">
                <Youtube className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/" ariaLabel="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://medium.com/" ariaLabel="Medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.37 7.46h15.27v1.4H4.37z"></path>
                  <path d="M4.37 9.86h15.27v1.4H4.37z"></path>
                  <path d="M4.37 12.26h15.27v1.4H4.37z"></path>
                  <path d="M4.37 14.66h7.63v1.4H4.37z"></path>
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#cv">Resume</FooterLink>
              <FooterLink href="#youtube">YouTube</FooterLink>
              <FooterLink href="#facebook">Facebook</FooterLink>
              <FooterLink href="#medium">Medium</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-medium">Email:</span> aliyasirali@gmail.com
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Location:</span> Stockholm, Sweden
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Yasir Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  href, 
  ariaLabel, 
  children 
}: { 
  href: string; 
  ariaLabel: string; 
  children: React.ReactNode 
}) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const FooterLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode 
}) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

export default Footer;

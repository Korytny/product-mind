
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Главная", href: "/", isHash: false },
  { label: "Проекты", href: "#projects", isHash: true },
  { label: "Примеры", href: "#business-cases", isHash: true },
  { label: "Этапы проекта", href: "#project-stages", isHash: true },
  { label: "Команда", href: "#team", isHash: true },
  { label: "Отзывы", href: "#testimonials", isHash: true },
  { label: "Контакты", href: "#contact", isHash: true },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Check if we're on the homepage
    setIsHomePage(window.location.pathname === '/');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Only update active section on homepage
      if (isHomePage) {
        // Update active section based on scroll position
        const sections = navItems
          .filter(item => item.isHash)
          .map(item => item.href.substring(1));
        
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-purple-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white">Product Mind</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            // For non-hash links, use Link component
            if (!item.isHash) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link ${
                    (isHomePage && activeSection === "hero" && item.href === "/") || 
                    (!isHomePage && item.href === window.location.pathname)
                      ? 'active'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            
            // For hash links on homepage, use normal anchor
            if (isHomePage) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            }
            
            // For hash links on other pages, link back to homepage with hash
            return (
              <Link
                key={item.label}
                to={`/${item.href}`}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/#contact"
            className="btn-primary ml-12"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Начать проект
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-purple-dark/95 backdrop-blur-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => {
              // For non-hash links, use Link component
              if (!item.isHash) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`nav-link ${
                      (isHomePage && activeSection === "hero" && item.href === "/") || 
                      (!isHomePage && item.href === window.location.pathname)
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              
              // For hash links on homepage, use normal anchor
              if (isHomePage) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }
              
              // For hash links on other pages, link back to homepage with hash
              return (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/#contact"
              className="btn-primary inline-block text-center"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Начать проект
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
/*  { label: "Главная", href: "/", isHash: false }, */
  { label: "Проекты", href: "#projects", isHash: true },
  { label: "Примеры", href: "#business-cases", isHash: true },
  { label: "Этапы", href: "#project-stages", isHash: true },
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
    setIsHomePage(window.location.pathname === '/');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      if (isHomePage) {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom mx-auto flex items-center justify-between py-4">
        {/* Логотип слева */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white">Студия цифровых продуктов</span>
        </Link>

        {/* Основное меню по центру */}
        <nav className="hidden md:flex items-center justify-center flex-1 px-8">
          <div className="flex space-x-1">
            {navItems.map((item) => {
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
          </div>
        </nav>

        {/* Кнопка справа (скрыта на мобильных) */}
        <div className="hidden md:block">
          <Link
            to="/#contact"
            className="btn-primary"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Начать проект
          </Link>
        </div>

        {/* Мобильное меню */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-purple-dark/95 backdrop-blur-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => {
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
            {/* Кнопка "Начать проект" скрыта на мобильных устройствах */}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

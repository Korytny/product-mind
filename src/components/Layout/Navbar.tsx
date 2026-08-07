import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/language';

const Navbar: React.FC = () => {
  const { lang, t, switchLang } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHomePage, setIsHomePage] = useState(true);

  const navItems = [
    { label: t("navProjects"), href: "#projects", isHash: true },
    { label: t("navExamples"), href: "#business-cases", isHash: true },
    { label: t("navStages"), href: "#project-stages", isHash: true },
    { label: t("navCase"), href: "#case", isHash: true },
    { label: t("navTeam"), href: "#team", isHash: true },
    { label: t("navTestimonials"), href: "#testimonials", isHash: true },
    { label: t("navContact"), href: "#contact", isHash: true },
  ];

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/' + lang);

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
            if (rect.top <= window.innerHeight * 0.7) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, lang]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom mx-auto flex items-center justify-between py-4">
        {/* Logo on the left */}
        <Link to={`/${lang}`} className="flex items-center">
          <span className="text-xl font-bold text-white">{t("brandTitle")}</span>
        </Link>

        {/* Main menu centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const homeUrl = '/' + lang;
              
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
                  to={homeUrl + item.href}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right side: language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => switchLang(lang === "ru" ? "en" : "ru")}
            className="text-white/70 hover:text-white text-sm font-medium transition-colors border border-white/20 rounded px-2 py-1"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>

          <Link
            to={`/${lang}/#contact`}
            className="btn-primary"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t("navStartProject")}
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => switchLang(lang === "ru" ? "en" : "ru")}
            className="text-white/70 hover:text-white text-sm font-medium transition-colors border border-white/20 rounded px-2 py-1"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
          <button 
            className="text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-purple-dark/95 backdrop-blur-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => {
              const homeUrl = '/' + lang;
              
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
                  to={homeUrl + item.href}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import React from 'react';
import { ArrowUp } from 'lucide-react';

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Business Examples", href: "#business-cases" },
  { label: "Project Stages", href: "#project-stages" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-dark py-12 border-t border-white/10">
      <div className="max-w-[1282px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <a href="#" className="flex justify-center md:justify-start items-center mb-6">
              <span className="text-xl font-bold text-white">Product Mind</span>
            </a>
            <p className="text-gray-300">
              Development of digital products<br />
              and business process automation
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@productmind.ru"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@productmind.ru
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/korytny"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @korytny
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/3become1"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  vk.com/3become1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 w-full text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Product Mind. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <a
              href="#hero"
              className="flex items-center justify-center w-10 h-10 bg-accent rounded-full transition-transform hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { ArrowUp } from 'lucide-react';

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Проекты", href: "#projects" },
  { label: "Бизнес Примеры", href: "#business-cases" },
  { label: "Этапы проекта", href: "#project-stages" },
  { label: "Команда", href: "#team" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
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
              Разработка цифровых продуктов<br />
              и автоматизация бизнес-процессов
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:korytny@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  korytny@gmail.com
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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Product Mind. Все права защищены.
            </p>
            <a 
              href="#hero" 
              className="flex items-center justify-center w-10 h-10 bg-accent rounded-full transition-transform hover:-translate-y-1"
              aria-label="Вернуться наверх"
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

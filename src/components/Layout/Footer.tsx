
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
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center mb-6">
            <span className="text-xl font-bold text-white">Product Mind</span>
          </a>
          <p className="text-gray-300">
            Разработка цифровых продуктов и автоматизация бизнес-процессов
          </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
            <a href="#contact" className="btn-primary inline-block text-center mt-6">
              Начать проект
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
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
    </footer>
  );
};

export default Footer;

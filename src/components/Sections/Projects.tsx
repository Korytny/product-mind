
import React from 'react';
import { MessageSquare, Smartphone, LayoutDashboard, ArrowRight } from 'lucide-react';
import AnimatedImage from '../UI/AnimatedImage';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  subtitle, 
  description, 
  icon,
  index
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-xl animate-on-scroll">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
        <div className="overflow-visible h-64 md:h-auto relative z-50 md:col-span-3">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
          />
        </div>
        <div className="p-6 flex flex-col justify-center md:col-span-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-accent mb-3 font-medium">{subtitle}</p>
          <p className="text-gray-300 mb-6">{description}</p>
          <a href="#contact" className="inline-flex items-center text-accent hover:text-accent-light transition-colors">
            Узнать подробнее <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

const projectsData = [
  {
    image: "/images/chat.png",
    title: "Умный чат-бот для вашего бизнеса",
    subtitle: "",
    description: (
      <ul className="list-disc list-inside space-y-2">
        <li>Автоматизирует рутинные процессы</li>
        <li>Решает задачи клиентов 24/7</li>
        <li>Увеличивает конверсию</li>
        <li>Интегрируется с вашей CRM</li>
        <li>Помнит историю общения</li>
      </ul>
    ),
    icon: <MessageSquare className="text-accent h-6 w-6" />
  },
  {
    image: "/images/mob.jpg",
    title: "Мобильное приложение",
    subtitle: "",
    description: (
      <ul className="list-disc list-inside space-y-2">
        <li>Улучшает клиентский опыт</li>
        <li>Бесплатное тестирование продуктов</li>
        <li>Разнообразный функционал</li>
        <li>Может работать в офлайне</li>
        <li>Имеет доступ к данным телефона</li>
      </ul>
    ),
    icon: <Smartphone className="text-accent h-6 w-6" />
  },
  {
    image: "/images/admin.png",
    title: "Управление бизнесом через админку",
    subtitle: "",
    description: (
      <ul className="list-disc list-inside space-y-2">
        <li>Удобное управление данными и процессами</li>
        <li>Ролевой доступ для сотрудников</li>
        <li>Разнообразная аналитика - графики, таблицы</li>
        <li>Интеграции с другими сервисами</li>
        <li>Обучение и работа с ИИ инструментами</li>
      </ul>
    ),
    icon: <LayoutDashboard className="text-accent h-6 w-6" />
  }
];

const Projects: React.FC = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-b from-purple-dark to-purple">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Наши проекты</h2>
        </div>

        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              icon={project.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Link to="/projects" className="btn-primary inline-flex items-center">
            Все проекты <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

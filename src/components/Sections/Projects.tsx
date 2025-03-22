
import React from 'react';
import { MessageSquare, Smartphone, LayoutDashboard, ArrowRight } from 'lucide-react';
import AnimatedImage from '../UI/AnimatedImage';

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="overflow-visible h-64 md:h-auto relative z-50">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
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
    subtitle: "Автоматизация поддержки клиентов и увеличение конверсии",
    description: "Чат-бот, который решает задачи клиентов 24/7, интегрируется с вашей CRM и обучается на основе данных",
    icon: <MessageSquare className="text-accent h-6 w-6" />
  },
  {
    image: "/images/mob.jpg",
    title: "Мобильное приложение для вашего бизнеса",
    subtitle: "Удобство для клиентов и рост продаж",
    description: "Разработка мобильных приложений под iOS и Android с использованием ИИ для персонализации контента",
    icon: <Smartphone className="text-accent h-6 w-6" />
  },
  {
    image: "/images/admin.png",
    title: "Управление бизнесом через админку",
    subtitle: "Упростите управление данными и процессами",
    description: "Создание мощных админ-панелей для управления бизнес-процессами и аналитикой",
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
          <a href="#contact" className="btn-primary inline-flex items-center">
            Все проекты <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

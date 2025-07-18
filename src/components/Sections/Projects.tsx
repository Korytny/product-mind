
import React from 'react';
import { MessageSquare, Smartphone, LayoutDashboard, ArrowRight } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

interface ProjectCardProps {
  images: string[];
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  technologies: string[];
  icon: React.ReactNode;
  index: number;
  isMobile?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  title,
  subtitle,
  description,
  technologies,
  icon,
  index,
  isMobile = false
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-xl animate-on-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="overflow-visible h-64 md:h-80 relative z-50">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {images.map((image, i) => (
                <CarouselItem key={i} className="h-full">
                  <div className="h-full w-full">
                    <AnimatedImage
                      src={image}
                      alt={`${title} - изображение ${i+1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-accent text-white hover:bg-accent-light border-none" />
            <CarouselNext className="right-2 bg-accent text-white hover:bg-accent-light border-none" />
          </Carousel>
        </div>
        <div className={`p-6 flex flex-col ${isMobile ? 'mt-[-80px]' : 'justify-center'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-accent mb-3 font-medium">{subtitle}</p>
          <div className="text-gray-300 mb-4">{description}</div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-accent/10 rounded-full text-accent text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const projectsData = [
  {
    images: [
      "/images/mob4.jpg",
      "/images/chat2.jpg",
      "/images/chat3.jpg"
    ],
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
    technologies: ["N8N", "TeleTON", "Python", "React", "Node.js"],
    icon: <MessageSquare className="text-accent h-6 w-6" />
  },
  {
    images: [
      "/images/mob3.jpg",
      "/images/mob2.jpg",
      "/images/mob.jpg"
    ],
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
    technologies: ["React Native", "FlutterFlow", "Kotlin", "Firebase", "Redux"],
    icon: <Smartphone className="text-accent h-6 w-6" />
  },
  {
    images: [
      "/images/admin1.jpg",
      "/images/admin2.jpg",
      "/images/admin3.jpg"
    ],
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
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    icon: <LayoutDashboard className="text-accent h-6 w-6" />
  }
];

const Projects: React.FC = () => {
  const isMobile = useIsMobile();
  
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
          <h2 className="section-title inline-block pb-3">Направления разработки</h2>
        </div>

        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

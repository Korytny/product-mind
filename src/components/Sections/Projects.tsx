
import React from 'react';
import { MessageSquare, Smartphone, LayoutDashboard, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedImage from '../UI/AnimatedImage';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface ProjectCardProps {
  images: string[];
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  images, 
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
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image, i) => (
                <CarouselItem key={i}>
                  <AnimatedImage
                    src={image}
                    alt={`${title} - изображение ${i+1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-accent text-white hover:bg-accent-light border-none" />
            <CarouselNext className="right-2 bg-accent text-white hover:bg-accent-light border-none" />
          </Carousel>
        </div>
        <div className="p-6 flex flex-col justify-center">
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
    images: [
      "/images/chat.png",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
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
    icon: <MessageSquare className="text-accent h-6 w-6" />
  },
  {
    images: [
      "/images/mob.jpg",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
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
    icon: <Smartphone className="text-accent h-6 w-6" />
  },
  {
    images: [
      "/images/admin.png",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2070&auto=format&fit=crop"
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
              images={project.images}
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

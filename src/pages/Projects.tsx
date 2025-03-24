
import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, Smartphone, LayoutDashboard, BrainCircuit, Database, LineChart, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/UI/ContactForm';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedImage from '../components/UI/AnimatedImage';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectCardDetailsProps {
  images: string[];
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  index: number;
}

const ProjectCardDetails: React.FC<ProjectCardDetailsProps> = ({ 
  images, 
  title, 
  description, 
  features,
  technologies,
  icon,
  index
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-xl animate-on-scroll my-6">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
        <div className="md:col-span-3 h-56 md:h-64">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {images.map((image, i) => (
                <CarouselItem key={i} className="h-full">
                  <AspectRatio ratio={4/3} className="h-full">
                    <AnimatedImage
                      src={image}
                      alt={`${title} - изображение ${i+1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-accent text-white hover:bg-accent-light border-none" />
            <CarouselNext className="right-2 bg-accent text-white hover:bg-accent-light border-none" />
          </Carousel>
        </div>
        <div className="p-4 flex flex-col justify-center md:col-span-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          </div>
          
          <div className="mb-3">
            <h4 className="text-accent font-medium mb-1">Ключевые возможности:</h4>
            <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-300 mb-3">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <h4 className="text-accent font-medium">Технологии:</h4>
              <div className="flex flex-wrap gap-1">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-accent/10 rounded-full text-accent text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
    description: "Интеллектуальный чат-бот с возможностью обучения и интеграции с вашей CRM-системой. Автоматизирует поддержку клиентов, отвечает на типовые вопросы и собирает данные для улучшения обслуживания.",
    features: [
      "Автоматизирует рутинные процессы",
      "Решает задачи клиентов 24/7",
      "Увеличивает конверсию",
      "Интегрируется с вашей CRM",
      "Помнит историю общения",
      "Обучается на основе данных"
    ],
    technologies: ["NLP", "Machine Learning", "Python", "React", "Node.js", "MongoDB"],
    icon: <MessageSquare className="text-accent h-6 w-6" />,
  },
  {
    images: [
      "/images/mob.jpg",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
    ],
    title: "Мобильное приложение",
    description: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android. Создаем интуитивно понятные интерфейсы с аналитикой пользовательского поведения.",
    features: [
      "Улучшает клиентский опыт",
      "Бесплатное тестирование продуктов",
      "Разнообразный функционал",
      "Может работать в офлайне",
      "Имеет доступ к данным телефона",
      "Интеграция с платежными системами"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
    icon: <Smartphone className="text-accent h-6 w-6" />,
  },
  {
    images: [
      "/images/admin.png",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2070&auto=format&fit=crop"
    ],
    title: "Управление бизнесом через админку",
    description: "Создание мощных и гибких административных панелей для управления всеми аспектами вашего бизнеса. Контроль и аналитика в едином интерфейсе.",
    features: [
      "Удобное управление данными и процессами",
      "Ролевой доступ для сотрудников",
      "Разнообразная аналитика - графики, таблицы",
      "Интеграции с другими сервисами",
      "Обучение и работа с ИИ инструментами",
      "Адаптивный дизайн для всех устройств"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Chart.js"],
    icon: <LayoutDashboard className="text-accent h-6 w-6" />,
  },
  {
    images: [
      "https://images.unsplash.com/photo-1677442135968-6b7d4b4d0cba?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639803938107-1485ced25921?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1654615797638-b8f90eff99e4?q=80&w=2070&auto=format&fit=crop"
    ],
    title: "Системы прогнозирования и аналитики",
    description: "Разработка комплексных аналитических систем с использованием искусственного интеллекта для прогнозирования продаж, поведения клиентов и оптимизации бизнес-процессов.",
    features: [
      "Прогнозирование спроса и продаж",
      "Сегментация клиентов",
      "Выявление аномалий и мошенничества",
      "Автоматическая отчетность",
      "Интеграция с существующими системами",
      "Визуализация данных"
    ],
    technologies: ["Python", "TensorFlow", "Pandas", "SQL", "Power BI", "Scikit-learn"],
    icon: <BrainCircuit className="text-accent h-6 w-6" />,
  },
  {
    images: [
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format&fit=crop"
    ],
    title: "Интеграционные решения",
    description: "Создание API и микросервисов для интеграции различных бизнес-систем. Объединение данных из разных источников в единую экосистему.",
    features: [
      "Создание REST и GraphQL API",
      "Разработка микросервисной архитектуры",
      "Интеграция с внешними сервисами",
      "Обеспечение безопасности данных",
      "Масштабируемые решения",
      "Документация и поддержка"
    ],
    technologies: ["Node.js", "Java", "Docker", "Kubernetes", "RabbitMQ", "OAuth"],
    icon: <Database className="text-accent h-6 w-6" />,
  },
  {
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ],
    title: "BI-системы и дашборды",
    description: "Разработка интерактивных бизнес-дашбордов и систем бизнес-аналитики. Визуализация данных для принятия управленческих решений.",
    features: [
      "Интерактивные дашборды",
      "Автоматизация отчетности",
      "Визуализация KPI",
      "Мониторинг бизнес-процессов",
      "Экспорт данных в различных форматах",
      "Настраиваемые уведомления"
    ],
    technologies: ["React", "D3.js", "Recharts", "SQL", "Tableau", "Excel API"],
    icon: <LineChart className="text-accent h-6 w-6" />,
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set up intersection observer for scroll animations
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

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-purple-dark overflow-x-hidden">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-purple-dark to-purple">
          <div className="container-custom">
            <div className="mb-8 animate-on-scroll">
              <Link to="/" className="inline-flex items-center text-accent hover:text-accent-light transition-colors mb-4">
                <ArrowLeft size={16} className="mr-2" /> Вернуться на главную
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Мы создаем инновационные решения с использованием искусственного интеллекта для автоматизации и масштабирования бизнеса. 
                Каждый проект разрабатывается с учетом специфики вашего бизнеса и направлен на достижение конкретных результатов.
              </p>
            </div>

            {/* Projects list */}
            <div className="space-y-12">
              {projectsData.map((project, index) => (
                <ProjectCardDetails
                  key={index}
                  images={project.images}
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  icon={project.icon}
                  index={index}
                />
              ))}
            </div>

          </div>
        </section>
      </main>
      <ProjectsContact />
      <Footer />
    </div>
  );
};

export default Projects;

const ProjectsContact: React.FC = () => {
  return (
    <section id="contact" className="bg-purple">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Свяжитесь с нами</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="glass-card p-6 md:p-8">
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-accent" />,
                    title: "Email",
                    details: "info@aibusiness.com",
                    link: "mailto:info@aibusiness.com"
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-accent" />,
                    title: "Телефон",
                    details: "+7 (XXX) XXX-XX-XX",
                    link: "tel:+7XXXXXXXXXX"
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-accent" />,
                    title: "Адрес",
                    details: "Москва, ул. Примерная, 123",
                    link: "https://maps.google.com"
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start space-x-4 transition-transform hover:translate-x-2"
                    target={item.title === "Адрес" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-gray-300">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 md:mt-12">
                <h4 className="text-lg font-semibold mb-4">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-accent" aria-label="Facebook">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-accent" aria-label="Instagram">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-accent" aria-label="LinkedIn">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, Smartphone, LayoutDashboard, BrainCircuit, Database, LineChart } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedImage from '../components/UI/AnimatedImage';

interface ProjectCardDetailsProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  index: number;
}

const ProjectCardDetails: React.FC<ProjectCardDetailsProps> = ({ 
  image, 
  title, 
  description, 
  features,
  technologies,
  icon,
  index
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-xl animate-on-scroll my-8">
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
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-300 mb-6">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-accent font-medium mb-2">Ключевые возможности:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-accent font-medium mb-2">Технологии:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-accent/10 rounded-full text-accent text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <Link to="#contact" className="inline-flex items-center text-accent hover:text-accent-light transition-colors">
            Узнать подробнее <ArrowLeft size={16} className="ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const projectsData = [
  {
    image: "/images/chat.png",
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
    image: "/images/mob.jpg",
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
    image: "/images/admin.png",
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
    image: "https://images.unsplash.com/photo-1677442135968-6b7d4b4d0cba?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  icon={project.icon}
                  index={index}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 glass-card p-8 text-center animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы начать проект?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Свяжитесь с нами, чтобы обсудить ваши идеи и потребности. Мы поможем выбрать 
                оптимальное решение для вашего бизнеса.
              </p>
              <Link to="/#contact">
                <Button className="bg-accent hover:bg-accent-light text-white px-8 py-6 rounded-lg text-lg">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

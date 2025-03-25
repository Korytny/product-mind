
import React from 'react';
import { BarChartHorizontal, ShoppingBag, PackageCheck } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';

interface CaseStudyProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  image, 
  title, 
  subtitle, 
  description, 
  icon,
  index
}) => {
  return (
    <div className="glass-card overflow-hidden animate-on-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 flex flex-col justify-center order-2 md:order-1 min-h-[24rem]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-accent mb-3 font-medium">{subtitle}</p>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="overflow-hidden h-96 order-1 md:order-2">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
          />
        </div>
      </div>
    </div>
  );
};

const casesData = [
  {
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2070&auto=format&fit=crop",
    title: "Автоматизация поддержки клиентов",
    subtitle: "Компании: Metapol, RosIntelCom, FullDome Russia",
    description: "Создание воронок продаж через Сайт, Телеграм чатбот, Контекстную рекламу и Таргетинг - то что необходимо любому бизнесу. Захват клиентов и поэтапное прогревание до продажи это наша с вами реальность. Клиенты не падают с неба, а приходят в грамотно проработанные каналы.",
    icon: <BarChartHorizontal className="text-accent h-6 w-6" />
  },
  {
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2070&auto=format&fit=crop",
    title: "Мобильное приложение",
    subtitle: "Компании: HolySpots, GetCRM",
    description: "Приложения в телефоне остаются наиболее удобным способом постоянно взаимодействовать с вашими сервисами. Если нужны повторные покупки, то выбор очевидет - сделать свое приложение, которое даст удобство пользование понятным клиенту продуктом. Повторные продажи это золотое дно практически любого бизнеса. Обратите внимание на существущих клиентов и их потребоности.",
    icon: <ShoppingBag className="text-accent h-6 w-6" />
  },
  {
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop",
    title: "Система управления данными",
    subtitle: "Компании: JivoSite, Трудовик, Печи.ком",
    description: "Разработка своей CRM-системы это уже давно не rocket science. Вам нужно работать в своем информационном пространстве и для этого уже есть все необходимые инструменты. Облачные серверы и базы данных. Понятные и легко запускаемые обработчики. Готовые аналитические плагины. Мы собираем любую систему управления за считанные недели и обучаем ваших сотрудников работать в ней.",
    icon: <PackageCheck className="text-accent h-6 w-6" />
  }
];

const BusinessCases: React.FC = () => {
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
    <section id="business-cases" className="bg-purple-dark">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Примеры использования</h2>
        </div>

        <div className="space-y-16">
          {casesData.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              image={caseStudy.image}
              title={caseStudy.title}
              subtitle={caseStudy.subtitle}
              description={caseStudy.description}
              icon={caseStudy.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCases;

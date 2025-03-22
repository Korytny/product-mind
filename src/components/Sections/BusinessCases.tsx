
import React from 'react';
import { BarChartHorizontal, ShoppingBag, PackageCheck } from 'lucide-react';
import AnimatedImage from '../UI/AnimatedImage';

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
        <div className="p-6 flex flex-col justify-center order-2 md:order-1">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-accent mb-3 font-medium">{subtitle}</p>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="overflow-hidden order-1 md:order-2">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105"
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
    subtitle: "Увеличение скорости обработки запросов на 200%",
    description: "Внедрение чат-бота для компании из сферы e-commerce, что позволило сократить нагрузку на поддержку и увеличить удовлетворенность клиентов",
    icon: <BarChartHorizontal className="text-accent h-6 w-6" />
  },
  {
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2070&auto=format&fit=crop",
    title: "Мобильное приложение для ритейла",
    subtitle: "Рост продаж на 30% за 3 месяца",
    description: "Разработка мобильного приложения с персонализированными рекомендациями на основе ИИ, что привело к значительному росту повторных покупок",
    icon: <ShoppingBag className="text-accent h-6 w-6" />
  },
  {
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop",
    title: "Автоматизация управления складом",
    subtitle: "Сокращение времени обработки заказов на 50%",
    description: "Создание админ-панели для управления складскими процессами с интеграцией ИИ-алгоритмов для оптимизации логистики и прогнозирования спроса",
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
          <h2 className="section-title inline-block pb-3">Реальные кейсы</h2>
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

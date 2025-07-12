import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/Sparkles';
import AnimatedImage from '@/components/ui/AnimatedImage';

const AnimatedContainer = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div 
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '0.5s',
        animationFillMode: 'both'
      }} 
      className="animate-fade-in"
    >
      {children}
    </div>
  );
};

// Добавим глобальные стили анимации в компонент
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;

const directions = [
  {
    title: "Передовой инжиниринг",
    description: "Инновационные инженерные решения",
    icon: "🔧"
  },
  {
    title: "Техническое обслуживание",
    description: "Комплексный инфраструктурные работы", 
    icon: "🛠️"
  },
  {
    title: "Эксплуатация зданий",
    description: "Полный цикл работ по обслуживанию зданий",
    icon: "🏢"
  },
  {
    title: "Холодильное оборудование",
    description: "Поставки и монтаж кондеев и чиллеров",
    icon: "❄️"
  },
  {
    title: "Системы фальшпола",
    description: "Собственные решения для компонентного пола",
    icon: "🧱"
  }
];

const projects = [
  {
    name: "RusIntelCom.ru",
    description: "Основной брендовый сайт компании - здесь все услуги и проекты, общая деятельность компании",
    url: "https://rusintelcom.ru",
    image: "/images/case1.jpg"
  },
  {
    name: "iCOND.ru",
    description: "Сайт бизнес-единицы поставок холодильного оборудования - каталог, референсы, сертификаты",
    url: "https://icond.ru",
    image: "/images/case2.jpg"
  },
  {
    name: "MetaPol.pro",
    description: "Поставки фальшпола - новое бизнес направление, обширный каталог, статейный маркетинг",
    url: "https://metapol.pro",
    image: "/images/case3.jpg"
  }
];

const secondPhaseItems = [
  {
    name: "Проектное управление",
    description: "Систематизация проектов, разработка шаблонов планов и документов, в существующей Bitrix24",
    image: "/images/case-project.jpg"
  },
  {
    name: "Умная CRM-система", 
    description: "Собирает контакты с сайтов, проводит первоначальную классификацию лидов",
    image: "/images/case-crm.jpg"
  },
  {
    name: "Проактивный ИИ маркетинг",
    description: "Разработка стратегии по каналам, автоматизация создания контента, персональные рассылки",
    image: "/images/case-content.jpg"
  }
];

interface CaseProps {
  id?: string;
}

export const Case = ({ id }: CaseProps) => {
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    return () => styleElement.remove();
  }, []);

  return (
    <section id="case" className="w-full py-12 md:py-24 lg:py-32 bg-purple-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Кейс: цифровизация РусИнтелКом
          </h2>
          
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
            Компания поставщиком целого спектра инженерных решений.<br />
            В первую очередь были выделены 5 ключевых направлений <br />
            для цифровой трансформации бизнеса.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid gap-6 md:grid-cols-2 lg:grid-cols-5 mt-12">
          {directions.map((item, index) => (
            <AnimatedContainer key={index} delay={index * 0.1}>
              <div className="p-4 flex flex-col items-center text-center hover:shadow-lg transition-all bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden relative overflow-hidden mt-8">
          <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 py-4 px-4">
            {directions.map((item, index) => (
              <div key={`mobile-${index}`} className="flex-shrink-0 snap-center w-[80vw]">
                <div className="p-4 h-full flex flex-col items-center text-center hover:shadow-lg transition-all bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Вторая очередь - разработка сайтов по направениям</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedContainer key={index} delay={index * 0.2}>
                <div className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10">
                  <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">{project.name}</h4>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Посетить сайт
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Теретий этап - системные внутренние решения </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {secondPhaseItems.map((item, index) => (
              <AnimatedContainer key={index} delay={index * 0.2}>
                <div className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10">
                  <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { BarChartHorizontal, ShoppingBag, PackageCheck, Globe, Megaphone } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';

interface CaseStudyProps {
  image: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
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
          <div className="text-gray-300">{description}</div>
        </div>
        <div className="overflow-hidden w-full order-1 md:order-2 relative md:h-96">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-contain md:object-cover md:object-bottom transition-transform duration-700 hover:scale-105"
            animation={index % 2 === 0 ? 'slide-in' : 'slide-in-right'}
          />
        </div>
      </div>
    </div>
  );
};

const casesData = [
  {
    image: "/images/funel.jpg",
    title: "Контекстная реклама, таргетинг и SEO",
    subtitle: "Проекты: Metapol, RosIntelCom",
    description: (
      <>
        <p className="mb-4">Привлечение крупных проектов требует стратегической видимости. Ваши клиенты ищут решения и ваше предложение должно быть на виду. Контекстная реклама мгновенно охватывает "горячую" аудиторию, а SMM-таргетинг точно достучится до ЦА в соцсетях.</p>
        <p>SEO обеспечивает долгосрочную видимость, снижая зависимость от платного трафика. Это комплексный подход, гарантирующий, что ваша студия будет постоянно в поле зрения целевой аудитории, привлекая стабильный поток квалифицированных лидов.</p>
      </>
    ),
    icon: <Megaphone className="text-accent h-6 w-6" />
  },
  {
    image: "/images/project1.jpg",
    title: "Вебсайт расширяет воронку продаж",
    subtitle: "Проекты: rustelcom.ru, kinokupol.ru, holyspots.vedareader.ru",
    description: (
      <>
        <p className="mb-4">Конверсионный веб-сайт — это не просто красивый фасад, а фундоментальная потребность. Ваш бизнес не может эффективно привлекать и удерживать клиентов без сайта, который активно работает на расширение воронки продаж. Без него вы рискете потерять потенциальных клиентов уже на старте.</p>
        <p>Продуманный веб-ресурс становится неотъемлемой частью коммерческого процесса. Он автоматизирует первый контакт, направляя клиентов дальше по воронке, обеспечивая постоянный приток новых возможностей для вашего бизнеса.</p>
      </>
    ),
    icon: <Globe className="text-accent h-6 w-6" />
  },
  {
    image: "/images/crm.jpg",
    title: "CRM - принимает и удерживает клиентов",
    subtitle: "Проекты: Metapol, RosIntelCom, FullDome Russia",
    description: (
      <>
        <p className="mb-4">CRM-система жизненно необходимы инструмент для масштабирования Вашего бизнеса. Она позволяет эффективно принимать новые запросы, систематизировать информацию и отслеживать каждый этап воронки продаж.</p>
        <p>Наши системы гарантировано эффективно удерживают клиентов, за счет персонализированного подход и внедрения ИИ. Позвольте вашей CRM работать на вас, превращая каждый лид в ценного, долгосрочного партнера.</p>
      </>
    ),
    icon: <BarChartHorizontal className="text-accent h-6 w-6" />
  },
  {
    image: "/images/mob5.jpg",
    title: "Мобильное приложение - работа с базой",
    subtitle: "Проекты: HolySpots, GetCRM",
    description: (
      <>
        <p className="mb-4">Это прямой путь к лояльности и повторным продажам. Когда ваш сервис всегда под рукой в смартфоне клиента, это обеспечивает максимальное удобство и делает его незаменимым инструментом для любого бизнеса, нацеленного на долгосрочные отношения.</p>
        <p>Понимая потребности ваших клиентов, мы создадим интуитивно понятное и функциональное приложение, которое станет "золотым дном" повторных продаж, превращая существующих клиентов в постоянных и преданных покупателей.</p>
      </>
    ),
    icon: <ShoppingBag className="text-accent h-6 w-6" />
  },
  {
    image: "/images/adm4.jpg",
    title: "Система управления данными",
    subtitle: "Проекты: JivoSite, Трудовик, Печи.ком",
    description: (
      <>
        <p className="mb-4">В основе эффективного бизнеса – единое информационное пространство. Управление складом, магазином, файлами или проектами по отдельности создаёт хаос. Современные облачные решения дают возможности, но их интеграция требует экспертизы.</p>
        <p>Мы создаём комплексные системы управления данными, объединяя склад, магазин, проекты и рекламу в одно решение. Эти системы мы собираем за считанные недели, с полным обучением персонала. Получите контроль над данными для бесперебойной работы и масштабирования вашего бизнеса.</p>
      </>
    ),
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

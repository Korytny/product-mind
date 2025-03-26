
import React from 'react';
import { ClipboardList, Lightbulb, Rocket, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface StageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Stage: React.FC<StageProps> = ({ title, description, icon, index }) => {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-light rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
      <Card className="relative bg-purple/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl flex flex-col items-center text-center animate-on-scroll">
        <CardContent className="pt-8 pb-6">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
            {icon}
          </div>
          <span className="text-accent text-sm font-medium mb-2">Этап {index + 1}</span>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const stagesData = [
  {
    title: "ТЗ",
    description: "Анализируем ваши требования и составляем техническое задание",
    icon: <ClipboardList className="text-accent h-8 w-8" />
  },
  {
    title: "Прототипирование",
    description: "Создаем прототип будущего решения для согласования",
    icon: <Lightbulb className="text-accent h-8 w-8" />
  },
  {
    title: "MVP",
    description: "Разрабатываем MVP для тестирования гипотез и сбора обратной связи",
    icon: <Rocket className="text-accent h-8 w-8" />
  },
  {
    title: "Готовое решение",
    description: "Запускаем полноценное решение и поддерживаем его развитие",
    icon: <CheckCircle className="text-accent h-8 w-8" />
  }
];

const ProjectStages: React.FC = () => {
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
    <section id="project-stages" className="bg-gradient-to-b from-purple to-purple-dark">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Как мы работаем</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stagesData.map((stage, index) => (
            <Stage
              key={index}
              title={stage.title}
              description={stage.description}
              icon={stage.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStages;


import React from 'react';
import { MessageSquare, Smartphone, LayoutDashboard, ArrowRight } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useTranslation } from '../../i18n/language';

interface ProjectCardProps {
  images: string[];
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  technologies: string[];
  icon: React.ReactNode;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  title,
  subtitle,
  description,
  technologies,
  icon,
  index,
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-xl animate-on-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative overflow-hidden z-50 aspect-[4/3] md:aspect-auto md:h-full">
          <Carousel className="absolute inset-0 [&>div]:h-full">
            <CarouselContent className="h-full">
              {images.map((image, i) => (
                <CarouselItem key={i} className="h-full">
                  <AnimatedImage
                    src={image}
                    alt={`${title} - image ${i+1}`}
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

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      images: [
        "/images/mob4.jpg",
        "/images/chat2.jpg",
        "/images/chat3.jpg"
      ],
      title: t("proj1Title"),
      subtitle: "",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>{t("proj1Li1")}</li>
          <li>{t("proj1Li2")}</li>
          <li>{t("proj1Li3")}</li>
          <li>{t("proj1Li4")}</li>
          <li>{t("proj1Li5")}</li>
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
      title: t("proj2Title"),
      subtitle: "",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>{t("proj2Li1")}</li>
          <li>{t("proj2Li2")}</li>
          <li>{t("proj2Li3")}</li>
          <li>{t("proj2Li4")}</li>
          <li>{t("proj2Li5")}</li>
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
      title: t("proj3Title"),
      subtitle: "",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>{t("proj3Li1")}</li>
          <li>{t("proj3Li2")}</li>
          <li>{t("proj3Li3")}</li>
          <li>{t("proj3Li4")}</li>
          <li>{t("proj3Li5")}</li>
        </ul>
      ),
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
      icon: <LayoutDashboard className="text-accent h-6 w-6" />
    }
  ];
  
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
          <h2 className="section-title inline-block pb-3">{t('projectsTitle')}</h2>
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
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { BarChartHorizontal, ShoppingBag, PackageCheck, Globe, Megaphone } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';
import { useTranslation } from '../../i18n/language';

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

const BusinessCases: React.FC = () => {
  const { t } = useTranslation();

  const casesData = [
    {
      image: "/images/funel.jpg",
      title: t("case1Title"),
      subtitle: t("case1Subtitle"),
      description: (
        <>
          <p className="mb-4">{t("case1Desc1")}</p>
          <p>{t("case1Desc2")}</p>
        </>
      ),
      icon: <Megaphone className="text-accent h-6 w-6" />
    },
    {
      image: "/images/project1.jpg",
      title: t("case2Title"),
      subtitle: t("case2Subtitle"),
      description: (
        <>
          <p className="mb-4">{t("case2Desc1")}</p>
          <p>{t("case2Desc2")}</p>
        </>
      ),
      icon: <Globe className="text-accent h-6 w-6" />
    },
    {
      image: "/images/crm.jpg",
      title: t("case3Title"),
      subtitle: t("case3Subtitle"),
      description: (
        <>
          <p className="mb-4">{t("case3Desc1")}</p>
          <p>{t("case3Desc2")}</p>
        </>
      ),
      icon: <BarChartHorizontal className="text-accent h-6 w-6" />
    },
    {
      image: "/images/mob5.jpg",
      title: t("case4Title"),
      subtitle: t("case4Subtitle"),
      description: (
        <>
          <p className="mb-4">{t("case4Desc1")}</p>
          <p>{t("case4Desc2")}</p>
        </>
      ),
      icon: <ShoppingBag className="text-accent h-6 w-6" />
    },
    {
      image: "/images/adm4.jpg",
      title: t("case5Title"),
      subtitle: t("case5Subtitle"),
      description: (
        <>
          <p className="mb-4">{t("case5Desc1")}</p>
          <p>{t("case5Desc2")}</p>
        </>
      ),
      icon: <PackageCheck className="text-accent h-6 w-6" />
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
    <section id="business-cases" className="bg-purple-dark">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">{t("businessCasesTitle")}</h2>
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

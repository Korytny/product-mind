
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
    title: "Contextual Advertising, Targeting and SEO",
    subtitle: "Projects: Metapol, RosIntelCom",
    description: (
      <>
        <p className="mb-4">Attracting large projects requires strategic visibility. Your clients are searching for solutions and your offer should be visible. Contextual advertising instantly reaches a "hot" audience, and SMM targeting precisely reaches the target audience on social media.</p>
        <p>SEO ensures long-term visibility, reducing dependence on paid traffic. This is a comprehensive approach that guarantees your studio will constantly be in the field of view of the target audience, attracting a steady stream of qualified leads.</p>
      </>
    ),
    icon: <Megaphone className="text-accent h-6 w-6" />
  },
  {
    image: "/images/project1.jpg",
    title: "Website Expands the Sales Funnel",
    subtitle: "Projects: rustelcom.ru, kinokupol.ru, holyspots.vedareader.ru",
    description: (
      <>
        <p className="mb-4">A conversion-focused website is not just a beautiful facade, but a fundamental need. Your business cannot effectively attract and retain clients without a website that actively works on expanding the sales funnel. Without it, you risk losing potential clients right from the start.</p>
        <p>A well-thought-out web resource becomes an integral part of the commercial process. It automates the first contact, guiding clients further down the funnel, ensuring a constant flow of new opportunities for your business.</p>
      </>
    ),
    icon: <Globe className="text-accent h-6 w-6" />
  },
  {
    image: "/images/crm.jpg",
    title: "CRM - Accepts and Retains Clients",
    subtitle: "Projects: Metapol, RosIntelCom, FullDome Russia",
    description: (
      <>
        <p className="mb-4">A CRM system is a vital tool for scaling your business. It allows you to effectively accept new requests, systematize information and track every stage of the sales funnel.</p>
        <p>Our systems guarantee effective client retention through a personalized approach and AI integration. Let your CRM work for you, turning each lead into a valuable, long-term partner.</p>
      </>
    ),
    icon: <BarChartHorizontal className="text-accent h-6 w-6" />
  },
  {
    image: "/images/mob5.jpg",
    title: "Mobile Application - Working with the Database",
    subtitle: "Projects: HolySpots, GetCRM",
    description: (
      <>
        <p className="mb-4">This is a direct path to loyalty and repeat sales. When your service is always at hand on the client's smartphone, it provides maximum convenience and makes it an indispensable tool for any business focused on long-term relationships.</p>
        <p>Understanding your clients' needs, we will create an intuitive and functional application that will become a "gold mine" of repeat sales, turning existing clients into regular and loyal customers.</p>
      </>
    ),
    icon: <ShoppingBag className="text-accent h-6 w-6" />
  },
  {
    image: "/images/adm4.jpg",
    title: "Data Management System",
    subtitle: "Projects: JivoSite, Trudovik, Pechi.com",
    description: (
      <>
        <p className="mb-4">At the heart of effective business is a unified information space. Managing a warehouse, store, files or projects separately creates chaos. Modern cloud solutions offer possibilities, but their integration requires expertise.</p>
        <p>We create comprehensive data management systems, combining warehouse, store, projects and advertising into one solution. We assemble these systems in a matter of weeks, with full staff training. Get control over your data for uninterrupted operation and scaling of your business.</p>
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
          <h2 className="section-title inline-block pb-3">Use Cases</h2>
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

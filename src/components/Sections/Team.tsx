import React from 'react';
import AnimatedImage from '../ui/AnimatedImage';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from '../../i18n/language';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-light to-accent rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
      <Card className="relative bg-purple/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl flex flex-col items-center text-center animate-on-scroll group">
        <CardContent className="pt-8 pb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative mx-auto">
            <AnimatedImage
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              animation="scale"
            />
          </div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-accent text-sm">{position}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const Team: React.FC = () => {
  const { t } = useTranslation();

  const teamData = [
    {
      image: "/images/t1.jpg",
      name: t("teamName1"),
      position: t("teamPosPMO"),
    },
    {
      image: "/images/t5.jpg",
      name: t("teamName2"),
      position: t("teamPosCTO"),
    },
    {
      image: "/images/t2.jpg",
      name: t("teamName3"),
      position: t("teamPosBackend"),
    },
    {
      image: "/images/t4.jpg",
      name: t("teamName4"),
      position: t("teamPosDesigner"),
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
      { rootMargin: '0px', threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="team" className="bg-purple-dark">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">{t("teamTitle")}</h2>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>

        <div className="sm:hidden relative overflow-hidden">
          <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 py-4 px-4">
            {teamData.map((member, index) => (
              <div key={`mobile-${index}`} className="flex-shrink-0 snap-center w-[80vw]">
                <TeamMember
                  image={member.image}
                  name={member.name}
                  position={member.position}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

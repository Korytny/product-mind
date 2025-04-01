
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, socials }) => {
  return (
    <div className="group relative">
      {/* Glow effect */}
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

const teamData = [
  {
    image: "/images/t1.jpg",
    name: "Евгений Кортыный",
    position: "Основатель проекта",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    image: "/images/t2.jpg",
    name: "Иван Мякишев",
    position: "Разработчик Бекенд",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    image: "/images/t3.jpg",
    name: "Курников Андрей",
    position: "Разработка Фронтенд",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    image: "/images/t4.jpg",
    name: "Алина Брилина",
    position: "UI/UX Designer",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Team: React.FC = () => {
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
    <section id="team" className="bg-purple-dark">
      <div className="container-custom">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Наша команда</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

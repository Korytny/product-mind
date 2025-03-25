
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';

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
    <div className="glass-card p-6 flex flex-col items-center text-center group animate-on-scroll">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
        <AnimatedImage
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          animation="scale"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-accent text-sm mb-4">{position}</p>
      
      <div className="flex space-x-3">
        {socials.linkedin && (
          <a 
            href={socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-accent"
          >
            <Linkedin size={16} className="text-white" />
          </a>
        )}
        {socials.github && (
          <a 
            href={socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-accent"
          >
            <Github size={16} className="text-white" />
          </a>
        )}
        {socials.twitter && (
          <a 
            href={socials.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-accent"
          >
            <Twitter size={16} className="text-white" />
          </a>
        )}
      </div>
    </div>
  );
};

const teamData = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
    name: "Иван Иванов",
    position: "CEO",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    name: "Анна Петрова",
    position: "Data Scientist",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
    name: "Алексей Смирнов",
    position: "CTO",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    name: "Мария Сидорова",
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

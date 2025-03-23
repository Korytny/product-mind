
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedImage from '../UI/AnimatedImage';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect for background elements
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.speed || '0.1');
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background animation elements - kept small and within the container */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-light/10 rounded-full blur-3xl parallax" data-speed="-0.03" style={{ zIndex: -1 }}></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl parallax" data-speed="0.05" style={{ zIndex: -1 }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl parallax" data-speed="-0.08" style={{ zIndex: -1 }}></div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 relative z-10">
        <div className="flex flex-col justify-center animate-fade-in lg:pt-16">
          <h1 className="font-bold leading-tight mb-6">
            <span className="text-gradient">Масштабирование бизнеса</span> с ИИ
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Автоматизируйте процессы, увеличивайте прибыль и масштабируйте бизнес с помощью современных решений на базе искусственного интеллекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Начать проект
            </a>
            <a href="#projects" className="btn-secondary">
              Узнать больше
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end relative z-[100]">
          <div className="relative w-full max-w-[130%] h-auto z-[100] ml-8" style={{ aspectRatio: '1.3' }}>
            {/* Main CRM image */}
            <AnimatedImage
              src="/image.png"
              alt="Главное изображение продукта"
              className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10 opacity-100 z-0"
              animation="scale"
            />
            
            {/* Decorative elements with stats */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float z-20" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white">Скорость</p>
                  <p className="text-lg font-semibold text-white">+300%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card p-4 animate-float z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-light rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white">Качество</p>
                  <p className="text-lg font-semibold text-white">+500%</p>
                </div>
              </div>
            </div>
            
            {/* Animated stats card */}
            <div className="absolute -bottom-8 right-8 glass-card p-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Эффективность</p>
                  <p className="text-lg font-semibold text-white">+200%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

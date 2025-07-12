import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedImage from '../ui/AnimatedImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { dynamicContent } from '../../dynamicContent'; // Убедитесь, что путь правильный

const Hero: React.FC = () => {
  // Определяем дефолтный контент из dynamicContent.js как начальное состояние
  // Это убирает дублирование и делает default_default_default вашим единственным дефолтом
  const [content, setContent] = useState(dynamicContent.default_default_default);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source') || 'default';
    const utmMedium = params.get('utm_medium') || 'default';
    const utmCampaign = params.get('utm_campaign') || 'default';
    const contentKey = `${utmSource}_${utmMedium}_${utmCampaign}`;
    
    // Проверяем, есть ли контент по ключу в dynamicContent
    if (dynamicContent[contentKey]) {
      // Если есть, устанавливаем его. Теперь imageSrc будет браться из dynamicContent[contentKey]
      setContent(dynamicContent[contentKey]);
    } else {
      // Если ключа нет, убеждаемся, что установлен дефолтный контент
      // (это уже будет сделано при инициализации useState, но можно явно указать для ясности)
      setContent(dynamicContent.default_default_default);
    }
  }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только один раз при монтировании

  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
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
      className="relative min-h-[110vh] flex items-center pt-12 pb-16 overflow-hidden md:pt-12"
    >
      {/* Background animation elements - kept small and within the container */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-light/10 rounded-full blur-3xl parallax" data-speed="-0.03" style={{ zIndex: -1 }}></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl parallax" data-speed="0.05" style={{ zIndex: -1 }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl parallax" data-speed="-0.08" style={{ zIndex: -1 }}></div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 relative z-10">
        <div className="flex flex-col justify-center animate-fade-in lg:pt-8">
          <h1 className="font-bold leading-tight mb-2 text-[3rem] md:text-[3.6rem] mt-8 md:mt-0">
            {isMobile ? (
              <>
                <span className="relative inline-block">
                  <span className="text-gradient relative z-10">{content.mainHeading}</span>
                  <div className="absolute inset-0 w-full -z-10" />
                </span>
              </>
            ) : (
              <>
                <div className="block relative">
                  <span className="text-gradient relative z-10">{content.mainHeading}</span>
                  <div className="absolute inset-0 w-full h-full -z-10" />
                </div>
              </>
            )}
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg">
            {content.paragraph1}
          </p>
          {/* Добавьте кнопку CTA здесь, если она нужна */}
           <button 
             onClick={() => window.location.href = content.ctaButtonLink}
             className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-light transition-colors self-start"
           >
             {content.ctaButtonText}
           </button>
        </div>

        <div className="flex items-center justify-center lg:justify-end relative z-[100] mt-16 md:mt-0">
          <div className="relative w-full max-w-[130%] h-auto z-[100] ml-4" style={{ aspectRatio: '1.3' }}>
            {/* Main CRM image */}
            <AnimatedImage
              src={content.imageSrc} // Теперь imageSrc будет браться из dynamicContent
              alt={content.mainHeading}
              className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10 opacity-100 z-0"
              animation="scale"
              loading="eager"
            />
            
            {/* Decorative elements with stats - без изменений */}
            <div className={`absolute -top-10 -left-6 glass-card p-${isMobile ? '3' : '4'} animate-float z-20`} style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-accent rounded-full flex items-center justify-center`}>
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
            
            <div className={`absolute -top-6 -right-6 glass-card p-${isMobile ? '3' : '4'} animate-float z-20`} style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-purple-light rounded-full flex items-center justify-center`}>
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
            <div className={`absolute -bottom-8 right-8 glass-card p-${isMobile ? '3' : '4'} animate-float z-20`} style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-4">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-accent rounded-full flex items-center justify-center`}>
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

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-50 hidden md:block">
        <a href="#projects" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

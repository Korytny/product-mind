
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: 'float' | 'scale' | 'fade-in' | 'slide-in' | 'slide-in-right' | 'none';
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  animation = 'fade-in'
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [error, setError] = useState(false);
  const fallbackImage = 'https://via.placeholder.com/800x600?text=Изображение+не+найдено';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (imgRef.current) {
                imgRef.current.classList.add('visible');
              }
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'float':
        return 'animate-float';
      case 'scale':
        return 'animate-scale-in';
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in':
        return 'animate-slide-in';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'none':
        return '';
      default:
        return 'animate-fade-in';
    }
  };

  // Add a fallback in case the image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Image error for ${src}, using fallback`);
    setError(true);
  };

  return (
    <img
      ref={imgRef}
      src={error ? fallbackImage : src}
      alt={alt}
      className={`relative z-20 opacity-100 ${getAnimationClass()} ${className}`}
      loading="lazy"
      onError={handleError}
    />
  );
};

export default AnimatedImage;

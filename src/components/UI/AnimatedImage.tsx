
import React, { useEffect, useRef } from 'react';

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

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`opacity-0 ${getAnimationClass()} ${className}`}
      loading="lazy"
    />
  );
};

export default AnimatedImage;

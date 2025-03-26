
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SparklesProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: boolean;
  minSize?: number;
  maxSize?: number;
  quantity?: number;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Sparkles = ({
  className,
  background = false,
  minSize = 1,
  maxSize = 3,
  quantity = 15,
  speed = 1,
  children,
  ...props
}: SparklesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const sparkles = Array.from({ length: quantity }).map((_, i) => {
      const sparkle = document.createElement("div");
      sparkle.className = "absolute rounded-full bg-white opacity-0";
      
      const size = Math.random() * (maxSize - minSize) + minSize;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.boxShadow = "0 0 4px 1px rgba(255, 255, 255, 0.5)";
      
      const left = Math.random() * containerRect.width;
      const top = Math.random() * containerRect.height;
      sparkle.style.left = `${left}px`;
      sparkle.style.top = `${top}px`;
      
      const duration = Math.random() * 2 + 1;
      sparkle.style.animation = `sparkle ${duration * (3 / speed)}s linear infinite`;
      
      // Delayed start for more natural appearance
      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      
      container.appendChild(sparkle);
      return sparkle;
    });

    sparklesRef.current = sparkles;
    
    // Create the animation keyframes
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes sparkle {
        0% { opacity: 0; transform: scale(0); }
        25% { opacity: 1; }
        50% { opacity: 1; transform: scale(1); }
        75% { opacity: 0.5; }
        100% { opacity: 0; transform: scale(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      sparkles.forEach(sparkle => sparkle.remove());
      style.remove();
    };
  }, [maxSize, minSize, quantity, speed]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative z-10 overflow-visible",
        background ? "w-full h-full absolute left-0 top-0 z-0" : "inline-block",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Sparkles;

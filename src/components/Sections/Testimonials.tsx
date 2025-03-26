
import React from 'react';
import { AnimatedTestimonials } from '../ui/AnimatedTestimonials';

const testimonialData = [
  {
    quote: "Спасибо за автоматизацию нашего бизнеса! Теперь мы экономим 20 часов в неделю на обработке запросов клиентов. Чат-бот работает безупречно и постоянно обучается.",
    name: "Екатерина Николаева",
    designation: "CEO, E-commerce Store",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  },
  {
    quote: "Мобильное приложение, разработанное командой AI Business, помогло нам увеличить средний чек на 15%. Персонализированные рекомендации работают отлично!",
    name: "Дмитрий Морозов",
    designation: "Marketing Director, Retail Chain",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote: "Внедрение админки с ИИ-алгоритмами изменило наш подход к управлению складом. Точные прогнозы и автоматизация рутинных задач сэкономили нам миллионы.",
    name: "Ольга Семенова",
    designation: "Operations Manager, Logistics Company",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote: "Разработанный ИИ-помощник для службы поддержки справляется с 78% запросов без участия человека. Наши клиенты даже не догадываются, что общаются с ботом.",
    name: "Алексей Петров",
    designation: "CTO, Tech Solutions",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote: "Благодаря системе автоматического анализа продаж, мы смогли увеличить оборот на 30% за квартал. Аналитическая панель интуитивно понятна даже неопытным пользователям.",
    name: "Марина Иванова",
    designation: "Sales Director, Distribution Network",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=1887&auto=format&fit=crop",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-purple-dark to-purple relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mb-8 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Что говорят наши клиенты</h2>
        </div>

        <AnimatedTestimonials 
          testimonials={testimonialData} 
          autoplay={true}
          className="py-8" 
        />
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  text: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const testimonialData: TestimonialProps[] = [
  {
    text: "Спасибо за автоматизацию нашего бизнеса! Теперь мы экономим 20 часов в неделю на обработке запросов клиентов. Чат-бот работает безупречно и постоянно обучается.",
    name: "Екатерина Николаева",
    position: "CEO",
    company: "E-commerce Store",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    rating: 5
  },
  {
    text: "Мобильное приложение, разработанное командой AI Business, помогло нам увеличить средний чек на 15%. Персонализированные рекомендации работают отлично!",
    name: "Дмитрий Морозов",
    position: "Marketing Director",
    company: "Retail Chain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  },
  {
    text: "Внедрение админки с ИИ-алгоритмами изменило наш подход к управлению складом. Точные прогнозы и автоматизация рутинных задач сэкономили нам миллионы.",
    name: "Ольга Семенова",
    position: "Operations Manager",
    company: "Logistics Company",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ text, name, position, company, image, rating }) => {
  return (
    <div className="glass-card p-6 md:p-8 flex flex-col animate-fade-in">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-300">{position}, {company}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < rating ? "text-accent fill-accent" : "text-gray-400"} 
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="italic text-lg mb-6">{text}</blockquote>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <section id="testimonials" className="bg-gradient-to-b from-purple-dark to-purple relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Что говорят наши клиенты</h2>
        </div>

        <div className="relative">
          {/* Mobile view: single testimonial */}
          <div className="md:hidden">
            <Testimonial {...testimonialData[currentIndex]} />
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop view: grid of testimonials */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialData.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

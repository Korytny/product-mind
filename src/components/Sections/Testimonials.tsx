
import React from 'react';
import { AnimatedTestimonials } from '../ui/AnimatedTestimonials';

const testimonialData = [
  {
    quote: "Спасибо за приложения по управлению МедиаКубом! Ваша админка помогает эффективно управлять контентом, а чат бот собирать аудиторию для наших медиа проектов.",
    name: "Артур Литвинов",
    designation: "Директор компании \"VideoMap.ru\"",
    src: "/images/o1.jpg",
  },
  {
    quote: "Ребята, спасибо за классный сайт! Мы вывели на рынок новый продукт Metapol. Отдельное благодарность за чатбот с ИИ, клиенты очень удивляются его знаниям о продуктах. Заказов стало в разу больше!",
    name: "Денис Мельник",
    designation: "Директор компании \"РусИнтелКом\"",
    src: "/images/o2.jpg",
  },
  {
    quote: "Сделали сайт и админку упраления для продкутов и заказов, добавили чат и теперь готовимся к захату мира! Выйдем на мировой рынок и про вас не забудем, господа",
    name: "Максим Газетов",
    designation: "Директор компании \"KinoKupol.ru\"",
    src: "/images/o3.jpg",
  },
  {
    quote: "Классно сделали админку для приложения HolySpots и систему управления нашими проектми VedaVerse. В планах раскручивать Digital маховик на полную мощность",
    name: "Георгий Аистов",
    designation: "Директор компании \"FullDome.pro\"",
    src: "/images/o4.jpg",
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

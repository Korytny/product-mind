
import React from 'react';
import { AnimatedTestimonials } from '../ui/AnimatedTestimonials';

const testimonialData = [
  {
    quote: "Thank you for the MediaCube management application! Your admin panel helps manage content efficiently, and the chatbot helps gather an audience for our media projects.",
    name: "Arthur Litvinov",
    designation: "Director of \"VideoMap.ru\"",
    src: "/images/o1.jpg",
  },
  {
    quote: "Guys, thank you for the great website! We've launched a new product Metapol. Special thanks for the AI chatbot, clients are very impressed with its knowledge about products. Orders have increased significantly!",
    name: "Denis Melnik",
    designation: "Director of \"RusIntelCom\"",
    src: "/images/o2.jpg",
  },
  {
    quote: "They made a website and order management admin, added chat and now we're preparing to take over the world!",
    name: "Maxim Gazetov",
    designation: "Director of \"KinoKupol.ru\"",
    src: "/images/o3.jpg",
  },
  {
    quote: "They made a great admin panel for the HolySpots app and a system to manage our VedaVerse projects. We plan to spin the Digital wheel at full power",
    name: "Georgy Aistov",
    designation: "Director of \"FullDome.pro\"",
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
          <h2 className="section-title inline-block pb-3">What Our Clients Say</h2>
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

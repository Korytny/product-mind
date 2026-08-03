import React from 'react';
import { AnimatedTestimonials } from '../ui/AnimatedTestimonials';
import { useTranslation } from '../../i18n/language';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonialData = [
    {
      quote: t("testimonial1Quote"),
      name: t("testimonial1Name"),
      designation: t("testimonial1Role"),
      src: "/images/o1.jpg",
    },
    {
      quote: t("testimonial2Quote"),
      name: t("testimonial2Name"),
      designation: t("testimonial2Role"),
      src: "/images/o3.jpg",
    },
    {
      quote: t("testimonial3Quote"),
      name: t("testimonial3Name"),
      designation: t("testimonial3Role"),
      src: "/images/o4.jpg",
    }
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-purple-dark to-purple relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mb-8 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">{t("testimonialsTitle")}</h2>
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

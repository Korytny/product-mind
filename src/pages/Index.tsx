
import React, { useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Sections/Hero';
import WebsiteSection from '../components/Sections/WebsiteSection';
import ProjectsSection from '../components/Sections/Projects';
import BusinessCases from '../components/Sections/BusinessCases';
import ProjectStages from '../components/Sections/ProjectStages';
import Team from '../components/Sections/Team';
import Testimonials from '../components/Sections/Testimonials';
import Contact from '../components/Sections/Contact';

const Index: React.FC = () => {
  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Preload all section background images for smoother experience
    const preloadImages = [
      "/images/img.png"
    ];
    
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-purple-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <WebsiteSection />
        <BusinessCases />
        <ProjectStages />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

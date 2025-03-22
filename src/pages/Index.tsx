
import React, { useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Sections/Hero';
import Projects from '../components/Sections/Projects';
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
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop"
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
        <Projects />
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

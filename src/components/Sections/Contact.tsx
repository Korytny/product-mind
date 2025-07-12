
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    title: "Email",
    details: "korytny@gmail.com",
    link: "mailto:korytny@gmail.com"
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    title: "Телеграм",
    details: "@korytny",
    link: "https://t.me/korytny"
  },
  {
    icon: <MapPin className="h-6 w-6 text-accent" />,
    title: "VK",
    details: "vk.com/3become1",
    link: "https://vk.com/3become1"
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-purple">
      <div className="container-custom">
        <div className="mb-8 text-center animate-on-scroll">
          <h2 className="section-title inline-block pb-3">Бесплатная консультация по вашим идеям</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

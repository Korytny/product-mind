
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch('http://api.robogpt.pro/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Ошибка отправки данных');
      }
  
      toast.success('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Ошибка:', error);
      toast.error('Произошла ошибка. Попробуйте ещё раз.');
    }
  
    setLoading(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 lg:p-10">
      <h3 className="text-2xl font-semibold mb-6 text-white">Свяжитесь с нами</h3>
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
          Ваше имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                   focus:ring-2 focus:ring-accent focus:border-transparent 
                   text-white placeholder-gray-400"
          placeholder="Иван Иванов"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                   focus:ring-2 focus:ring-accent focus:border-transparent 
                   text-white placeholder-gray-400"
          placeholder="example@email.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                   focus:ring-2 focus:ring-accent focus:border-transparent 
                   text-white placeholder-gray-400"
          placeholder="+7 (XXX) XXX-XX-XX"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                   focus:ring-2 focus:ring-accent focus:border-transparent 
                   text-white placeholder-gray-400 resize-none"
          placeholder="Расскажите о вашем проекте"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center"
      >
        {loading ? (
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
        ) : (
          <>
            <span>Отправить</span>
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

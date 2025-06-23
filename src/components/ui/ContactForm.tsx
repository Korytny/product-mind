import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
  
    // --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
    // 1. Определите ваш URL вебхука n8n
    const N8N_WEBHOOK_URL = 'https://n8n.vedareader.online/webhook/8d6ae7cd-5c4f-4888-98e8-b302ea031dc3';
  
    try {
      const response = await fetch(N8N_WEBHOOK_URL, { // <--- ИЗМЕНЕНО: теперь отправляем на n8n вебхук
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // FormData уже имеет правильные ключи (name, email, phone, message)
      });
  
      // Webhook n8n обычно возвращает пустой ответ с статусом 200 OK на успешный POST.
      // Не пытаемся парсить response.json() без проверки, т.к. может быть пустой ответ.
      if (!response.ok) {
        // Если n8n вебхук возвращает ошибку (например, 400 Bad Request), это будет здесь
        const errorText = await response.text(); // Читаем текст ошибки
        console.log('N8N Webhook response:', errorText);
        throw new Error(`Ошибка отправки на n8n: ${response.status} ${response.statusText} - ${errorText}`);
      }
  
      setIsDialogOpen(true);
      // Очищаем форму только после закрытия модального окна
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      toast.error('Произошла ошибка при отправке заявки. Попробуйте ещё раз.');
    }
  
    setLoading(false);
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="glass-card bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-10">
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
          Ваше имя
        </label>
        <input
          type="text"
          id="name"
          name="name" // Важно: name атрибут используется для ключа в formData
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
          name="email" // Важно: name атрибут используется для ключа в formData
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
          name="phone" // Важно: name атрибут используется для ключа в formData
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
          name="message" // Важно: name атрибут используется для ключа в formData
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

    <Dialog open={isDialogOpen} onOpenChange={(open) => {
      if (!open) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
      setIsDialogOpen(open);
    }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-4">
            Ваша заявка успешно отправлена.
          </DialogTitle>
        </DialogHeader>
        <div className="text-center mb-6">
          Если хотите связаться сейчас - нажмите на кнопку.
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <a 
              href={`https://t.me/producore_bot?start=${formData.email || 'no-email'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Перейти в телеграм
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ContactForm;

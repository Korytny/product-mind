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
    
    // Check if either email or phone is filled
    if (!formData.email && !formData.phone) {
      toast.error('Please provide an email or phone number');
      return;
    }

    setLoading(true);
  
    const CONTACT_WEBHOOK_URL = '/api/send-message';
  
    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      // Backend returns 200 OK on successful POST.
      if (!response.ok) {
        const errorText = await response.text();
        console.log('Backend response:', errorText);
        throw new Error(`Backend error: ${response.status} ${response.statusText} - ${errorText}`);
      }
  
      setIsDialogOpen(true);
      // Clear form only after closing the dialog
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while submitting the form. Please try again.');
    }
  
    setLoading(false);
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="glass-card bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        
        <div className="space-y-4 md:col-span-1">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                       focus:ring-2 focus:ring-accent focus:border-transparent 
                       text-white placeholder-gray-400"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                       focus:ring-2 focus:ring-accent focus:border-transparent 
                       text-white placeholder-gray-400"
              placeholder="example@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
              Or Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                       focus:ring-2 focus:ring-accent focus:border-transparent 
                       text-white placeholder-gray-400"
              placeholder="+7 (XXX) XXX-XX-XX"
            />
          </div>
        </div>
        
        <div className="md:col-span-1 flex flex-col">
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full flex-grow px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                     focus:ring-2 focus:ring-accent focus:border-transparent 
                     text-white placeholder-gray-400 resize-none"
            placeholder="Briefly describe your project"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center mt-4"
          >
            {loading ? (
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
            ) : (
              <>
                <span>Submit</span>
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
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
            Your request has been successfully submitted.
          </DialogTitle>
        </DialogHeader>
        <div className="text-center mb-6">
          If you'd like to contact us now - click the button.
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <a 
              href={`https://t.me/media_cube_bot?start=${formData.email || 'no-email'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Go to Telegram
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ContactForm;

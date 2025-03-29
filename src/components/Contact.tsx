
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted');
    // You could show a success toast here
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to say hello? Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Subject of your message" 
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={5} 
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-4 text-blue-600" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Email</h4>
                      <a href="mailto:your-email@example.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        your-email@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 text-blue-600" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                      <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-blue-600" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Location</h4>
                      <p className="text-sm text-gray-600">
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Availability</h3>
                <p className="text-gray-600 mb-4">
                  I'm currently open to freelance projects, full-time positions, and consulting opportunities.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-medium text-blue-700 mb-1">Current Status</h4>
                  <p className="text-sm text-blue-600">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Available for new projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

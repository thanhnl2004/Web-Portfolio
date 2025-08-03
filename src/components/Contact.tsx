
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
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have an opportunitity for me, or want to collaborate? Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
               
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Availability</h3>
            <p className="text-gray-600 mb-4">
              I'm looking for new grad opportunties in Software Engineering and Full Stack Development.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-medium text-blue-700 mb-1">Current Status</h4>
              <p className="text-sm text-blue-600">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Open to work
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

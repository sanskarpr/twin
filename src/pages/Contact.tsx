
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { isDark } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <div className={`min-h-screen transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-100 to-cyan-50'
      }`}>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-bold mb-4 ${
              isDark ? 'text-slate-100' : 'text-gray-800'
            }`}>Contact us</h1>
            <div className={`w-24 h-1 mx-auto mb-4 ${
              isDark ? 'bg-slate-400' : 'bg-gray-600'
            }`}></div>
            <p className={`text-xl ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>get in touch</p>
            <div className={`w-16 h-1 mx-auto ${
              isDark ? 'bg-slate-400' : 'bg-gray-600'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className={`text-lg mb-8 ${
                isDark ? 'text-slate-300' : 'text-gray-700'
              }`}>
                If you would like to get in touch with our team, please leave a message.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-cyan-600' : 'bg-cyan-500'
                  }`}>
                    <span className="text-white text-xl">👤</span>
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-slate-200' : 'text-gray-800'
                    }`}>Smart_city.co</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-cyan-600' : 'bg-cyan-500'
                  }`}>
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-slate-200' : 'text-gray-800'
                    }`}>Address</p>
                    <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>Vellore, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-cyan-600' : 'bg-cyan-500'
                  }`}>
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-slate-200' : 'text-gray-800'
                    }`}>Email</p>
                    <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>Smart_city@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className={`shadow-lg ${
              isDark 
                ? 'bg-slate-800/40 border-slate-700/50' 
                : 'bg-white border-slate-200'
            } backdrop-blur-sm`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold mb-6 ${
                  isDark ? 'text-slate-200' : 'text-gray-800'
                }`}>Leave messages here</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={isDark ? 'bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400' : ''}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={isDark ? 'bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400' : ''}
                      required
                    />
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={isDark ? 'bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400' : ''}
                    required
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Message.."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={isDark ? 'bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400' : ''}
                    required
                  />
                  
                  <Button 
                    type="submit" 
                    className={`${
                      isDark 
                        ? 'bg-cyan-600 hover:bg-cyan-700' 
                        : 'bg-cyan-600 hover:bg-cyan-700'
                    } text-white`}
                  >
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Footer */}
          <div className={`text-center mt-16 ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            <p>Created by team CA © 2025.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

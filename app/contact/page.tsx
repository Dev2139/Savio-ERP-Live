"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      role: formData.get('role') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully! We will get back to you soon.');
        form.reset();
      } else {
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Reach out to our team to learn more about how SavioERP can transform your manufacturing operations
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-5">
                      <Phone className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-700">+91 9687276300</p>
                      <p className="text-gray-600 mt-1">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-5">
                      <Mail className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-700">info@savioerp.com</p>
                      <p className="text-gray-600 mt-1">Support: support@savioerp.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-5">
                      <MapPin className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                      <p className="text-gray-700">516, 517, 518 - Samrudhdhi Business Hub, Opp. Hanspura</p>
                      <p className="text-gray-700">Near Naroda Business Hub, Near S.P.Ring road Circle</p>
                      <p className="text-gray-700">Naroda, Ahmedabad - 382330</p>
                      <p className="text-gray-600 mt-1">Gujarat-India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-5">
                      <Clock className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2655547357986!2d72.6834947!3d23.087372800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e812cee5538bb%3A0x2bfb6ee479ce872e!2sSavio%20ERP%20Softwares%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1767369787742!5m2!1sen!2sin" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Savio ERP Location Map"
                    ></iframe>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Request a Demo</h3>
                  <p className="text-gray-700 mb-6">
                    Schedule a personalized demonstration of SavioERP to see how our solution can address your specific manufacturing challenges.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                    Book a Demo
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
                  
                  {submitMessage && (
                    <div className={`mb-4 p-3 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Dev"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Patel"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Full Stack Developer"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="dev.patel@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your requirements..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
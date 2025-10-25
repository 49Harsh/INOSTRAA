'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-blue-800/20 to-purple-800/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your ideas into reality? Let&apos;s start the conversation.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Mobile App Development',
    'Website Development',
    'Custom Software Development',
    'Consulting Services',
    'Other'
  ];

  const budgets = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle size={16} className="mr-1" />
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle size={16} className="mr-1" />
              {errors.email}
            </motion.p>
          )}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your company name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Needed *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {errors.service && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle size={16} className="mr-1" />
              {errors.service}
            </motion.p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Budget
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        >
          <option value="">Select your budget range</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>{budget}</option>
          ))}
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Description *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Tell us about your project, goals, and requirements..."
        ></textarea>
        {errors.message && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm mt-1 flex items-center"
          >
            <AlertCircle size={16} className="mr-1" />
            {errors.message}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          type="submit"
          size="lg"
          variant="gradient"
          loading={isSubmitting}
          icon={<Send size={20} />}
          iconPosition="right"
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </motion.div>
    </form>
  );
}

function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'contact@inostraatechnologies.com',
      description: 'Send us an email anytime!',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 8097476088',
      description: 'Mon-Fri from 9am to 6pm',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Jail Road Tilak Nagar Delhi-110058',
      description: 'Come say hello at our office',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday',
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${detail.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <detail.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{detail.info}</p>
              <p className="text-gray-600 text-sm">{detail.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to bring your vision to life? Get in touch and let&apos;s discuss your project.
            </motion.p>
          </div>
          
          {/* Contact Info Cards */}
          <div className="mb-16">
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive support and maintenance packages to ensure your application continues to run smoothly and stays up-to-date with the latest security patches and features."
    },
    {
      question: "What's your development process like?",
      answer: "We follow an agile development approach with regular check-ins and updates. You'll be involved throughout the process with weekly demos and opportunities for feedback to ensure the final product meets your expectations."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and APIs. We'll analyze your current infrastructure and design solutions that work seamlessly with your existing tools and processes."
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
}

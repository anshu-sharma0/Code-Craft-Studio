'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'CodeCraft Studio transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations. The project was delivered on time and within budget.',
    project: 'E-commerce Platform',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'HealthTech Solutions',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Working with CodeCraft Studio was a game-changer for our startup. They built a robust mobile app that our users love. The team was professional, responsive, and delivered exceptional quality.',
    project: 'Healthcare Mobile App',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency Co.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'The UI/UX design work was outstanding. CodeCraft Studio created a beautiful, user-friendly interface that significantly improved our conversion rates. Highly recommended!',
    project: 'Website Redesign',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO',
    company: 'FinanceFlow',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Exceptional technical skills and project management. They integrated complex APIs seamlessly and provided ongoing support. Our platform runs flawlessly thanks to their expertise.',
    project: 'API Integration',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Product Manager',
    company: 'EduTech Pro',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'CodeCraft Studio delivered a comprehensive learning management system that exceeded our requirements. Their agile approach and regular updates kept us informed throughout the process.',
    project: 'Learning Platform',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Operations Manager',
    company: 'LogiFlow Systems',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Outstanding performance optimization work. Our website speed improved by 300% after their optimization. The team is knowledgeable, professional, and results-driven.',
    project: 'Performance Optimization',
  },
];

export default function Testimonials() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400 opacity-50" />
                    </div>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="w-fit mb-3">
                      {testimonial.project}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "{testimonial.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '98%', label: 'Client Satisfaction', description: 'Based on project completion surveys' },
              { number: '50+', label: 'Projects Delivered', description: 'Successfully completed projects' },
              { number: '30+', label: 'Happy Clients', description: 'Clients who trust our expertise' },
              { number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
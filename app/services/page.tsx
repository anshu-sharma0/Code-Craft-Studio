'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading Speed',
      'Cross-browser Compatibility',
      'Content Management Systems',
      'E-commerce Solutions'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Cross-platform Development',
      'Native Performance',
      'Push Notifications',
      'Offline Functionality',
      'App Store Optimization',
      'Real-time Features'
    ],
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless integration with third-party services and APIs.',
    features: [
      'RESTful API Development',
      'GraphQL Implementation',
      'Third-party Integrations',
      'Payment Gateway Setup',
      'Authentication Systems',
      'Data Migration'
    ],
    technologies: ['Node.js', 'Express', 'GraphQL', 'REST', 'OAuth'],
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimize your website for speed, SEO, and user experience.',
    features: [
      'Performance Audits',
      'Speed Optimization',
      'SEO Enhancement',
      'Core Web Vitals',
      'CDN Implementation',
      'Caching Strategies'
    ],
    technologies: ['Lighthouse', 'WebPageTest', 'GTmetrix', 'CloudFlare'],
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Keep your applications secure and up-to-date.',
    features: [
      'Security Audits',
      'Regular Updates',
      'Bug Fixes',
      'Performance Monitoring',
      'Backup Solutions',
    ],
    technologies: ['Security Tools', 'Monitoring', 'Backup Systems'],
  },
];

export default function Services() {
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive digital solutions
              that drive business growth and user engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-300 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-300 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Agile Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We adopt an Agile approach to deliver high-quality solutions through collaboration, iteration, and adaptability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Sprint Planning',
                description: 'Define the sprint goal, prioritize backlog items, and plan deliverables.',
              },
              {
                step: '02',
                title: 'Design & Develop',
                description: 'Collaboratively build and iterate on features using Agile sprints.',
              },
              {
                step: '03',
                title: 'Review & Feedback',
                description: 'Demo the work to stakeholders, gather feedback, and refine the product.',
              },
              {
                step: '04',
                title: 'Retrospective',
                description: 'Reflect on the sprint, identify improvements, and adapt for the next cycle.',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardHeader>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{phase.step}</div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{phase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss your requirements and create a custom solution that fits your needs and budget.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
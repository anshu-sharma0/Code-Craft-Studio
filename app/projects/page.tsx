'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/example/ecommerce',
    icon: Code,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A cross-platform mobile app for project management with real-time collaboration, file sharing, and progress tracking.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
    liveUrl: 'https://taskmanager-app.com',
    githubUrl: 'https://github.com/example/taskmanager',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
    liveUrl: 'https://healthcare-dashboard.com',
    githubUrl: 'https://github.com/example/healthcare',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Restaurant Ordering System',
    description: 'A complete restaurant management solution with online ordering, kitchen management, and customer loyalty programs.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'PayPal API', 'PWA'],
    liveUrl: 'https://restaurant-ordering.com',
    githubUrl: 'https://github.com/example/restaurant',
    icon: Code,
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'A mobile fitness app with workout tracking, nutrition logging, progress analytics, and social features.',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Fit API', 'SQLite'],
    liveUrl: 'https://fitness-tracker.com',
    githubUrl: 'https://github.com/example/fitness',
    icon: Smartphone,
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'A property listing and management platform with advanced search, virtual tours, and lead management.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox', 'AWS S3'],
    liveUrl: 'https://realestate-platform.com',
    githubUrl: 'https://github.com/example/realestate',
    icon: Globe,
  },
];

export default function Projects() {
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
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise 
              in web development, mobile apps, and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Links */}
                      <div className="flex space-x-4 pt-4">
                        <Button asChild size="sm"                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 hover:from-blue-700 hover:to-purple-700">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', description: 'Successfully delivered projects across various industries' },
              { number: '30+', label: 'Happy Clients', description: 'Satisfied clients who trust our expertise' },
              { number: '99%', label: 'Success Rate', description: 'Projects delivered on time and within budget' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <CardTitle className="text-xl">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{stat.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's bring your ideas to life with innovative solutions that drive results.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
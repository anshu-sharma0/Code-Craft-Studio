'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Shield, 
  Target, 
  Heart, 
  Lightbulb 
} from 'lucide-react';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Tailwind CSS', 'React Native', 'Flutter',
  'GraphQL', 'Redis', 'Kubernetes', 'Firebase'
];

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower businesses with innovative digital solutions that drive growth and success in the modern world.',
  },
  {
    icon: Heart,
    title: 'Vision',
    description: 'To become the leading freelance development studio known for exceptional quality and client satisfaction.',
  },
  {
    icon: Lightbulb,
    title: 'Values',
    description: 'Innovation, Quality, Integrity, and Client Success are at the core of everything we do.',
  },
];

const expertise = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, Vue.js, Angular, Next.js, TypeScript',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Flutter, iOS, Android',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Sketch, Prototyping',
  },
  {
    icon: Shield,
    title: 'Security & Testing',
    description: 'Authentication, Testing, Code Reviews',
  },
];

export default function About() {
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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeCraft Studio
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate freelance professionals dedicated to creating 
              exceptional digital experiences that transform businesses and delight users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pt-14 pb-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              CodeCraft Studio is a collective of skilled freelance developers, designers, and 
              digital strategists who share a passion for creating innovative solutions. 
              With combined years of experience in the tech industry, we bring together 
              diverse expertise to deliver exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg w-fit mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-5 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in a wide range of technologies and frameworks to deliver 
              comprehensive solutions for your digital needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver modern, 
              scalable, and efficient solutions.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pb-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-400 mb-6 pt-8">
              Why Choose Us?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every project undergoes rigorous testing and code reviews.',
              },
              {
                title: 'Agile Process',
                description: 'We use agile methodologies to ensure flexibility and quick adaptation to changes.',
              },
              {
                title: 'Client-Centric',
                description: 'Your success is our success. We work closely with you throughout the project.',
              },
              {
                title: 'Ongoing Support',
                description: 'We provide continuous support and maintenance even after project completion.',
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
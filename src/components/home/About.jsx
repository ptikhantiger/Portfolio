import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionTitle } from '../common/SectionTitle';

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: '3+ Years',
      description: 'Experience in Frontend Development'
    },
    {
      icon: Palette,
      title: '20+ Projects',
      description: 'Successfully Completed'
    },
    {
      icon: Zap,
      title: 'Modern Stack',
      description: 'Using Latest Technologies'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Delivering Quality Solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle subtitle="Get to know more about me">
          About Me
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/ali.png"
                  alt="Ali - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur-xl opacity-20 -z-10" />
            </motion.div>
          </AnimatedSection>

          {/* Content Section */}
          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Hi, I'm Ali - Frontend Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate frontend developer with a keen eye for design and a love for creating
                  beautiful, responsive web applications. My journey in web development started with a
                  curiosity about how websites work, and it has evolved into a deep passion for crafting
                  exceptional user experiences.
                </p>
                <p>
                  I specialize in modern web technologies including React, Tailwind CSS, and JavaScript.
                  I'm constantly learning and staying up-to-date with the latest trends and best practices
                  in frontend development to deliver cutting-edge solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="card hover:shadow-xl transition-shadow"
                  >
                    <item.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

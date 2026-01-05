import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { ContactForm } from '../components/contact/ContactForm';
import { SocialLinks } from '../components/contact/SocialLinks';
import { pageTransition } from '../utils/animations';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-8900',
      link: 'tel:+12345678900'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your City, Country',
      link: null
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-20 bg-white dark:bg-gray-900 min-h-screen"
    >
      <div className="container-custom">
        <SectionTitle subtitle="Have a project in mind? Let's work together">
          Get In Touch
        </SectionTitle>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </motion.div>
  );
};

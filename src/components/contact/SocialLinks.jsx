import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="card">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Let's Connect
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>

        <div className="space-y-4">
          {socialLinks.map((social, index) => {
            const IconComponent = Icons[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 hover:text-white transition-all group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg group-hover:bg-white/20 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">{social.name}</p>
                  <p className="text-sm opacity-75">
                    {social.name === 'Email' ? 'Send me an email' : `Connect on ${social.name}`}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="card bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <h3 className="text-2xl font-bold mb-2">Available for Work</h3>
        <p className="opacity-90 mb-4">
          I'm currently open to freelance opportunities and full-time positions. Let's build something amazing together!
        </p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="font-medium">Available now</span>
        </div>
      </div>
    </motion.div>
  );
};

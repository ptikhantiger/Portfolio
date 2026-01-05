import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const SectionTitle = ({
  children,
  className = '',
  subtitle = '',
  centered = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12',
        centered ? 'text-center' : '',
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
};

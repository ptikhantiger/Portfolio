import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const SkillCard = ({ skill, index }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[skill.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="card hover:shadow-xl cursor-pointer group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
          {skill.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {skill.category}
        </p>
      </div>
    </motion.div>
  );
};

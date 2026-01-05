import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const ProjectFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            'px-6 py-3 rounded-full font-medium transition-all',
            selectedCategory === category
              ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
          {selectedCategory !== 'All' && selectedCategory === category && (
            <motion.div
              layoutId="categoryIndicator"
              className="absolute -bottom-1 left-0 right-0 h-1 bg-white rounded-full"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Skills } from '../components/home/Skills';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { pageTransition } from '../utils/animations';

export const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
    </motion.div>
  );
};

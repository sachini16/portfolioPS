import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const arrowVariants = {
    initial: { y: 0 },
    hover: { 
      y: -4,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 10px 25px -5px rgba(29, 78, 216, 0.4), 0 8px 10px -6px rgba(29, 78, 216, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass border border-blue-200/60 shadow-lg flex items-center justify-center cursor-pointer group text-blue-600 hover:text-blue-700 hover:border-blue-300 transition-colors duration-300"
          aria-label="Back to Top"
        >
          <motion.div
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
          >
            <ArrowUp size={22} strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

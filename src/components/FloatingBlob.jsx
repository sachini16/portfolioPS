import { motion } from 'framer-motion';

export default function FloatingBlob({ color = '#2563EB', size = 400, top, left, right, bottom, delay = 0 }) {
  return (
    <motion.div
      className="blob"
      style={{ width: size, height: size, background: color, top, left, right, bottom }}
      animate={{ y: [0, -28, 0], x: [0, 12, 0], scale: [1, 1.07, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillBar({ name, percentage, color, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-dark font-semibold text-sm">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="text-secondary text-sm font-medium tabular-nums"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

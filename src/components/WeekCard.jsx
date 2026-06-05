import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WeekCard({ week, index }) {
  const Icon = week.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8, transition: { duration: 0.22 } }}
      className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer"
      style={{ boxShadow: '0px 8px 28px rgba(37,99,235,0.12)' }}
    >
      <Link to={`/week/${week.id}`} className="block">
        {/* ── Image area ── */}
        <div className="relative w-full aspect-video overflow-hidden bg-blue-50">
          {week.image ? (
            <img
              src={week.image}
              alt={week.isAssignment ? week.title : `Week ${week.id} – ${week.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            /* Placeholder for weeks without an image */
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: `linear-gradient(135deg, ${week.color}22 0%, ${week.color}44 100%)` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                style={{ background: week.color }}
              >
                <Icon size={32} className="text-white" />
              </div>
              <p className="text-xs font-semibold" style={{ color: week.color }}>
                {week.title}
              </p>
            </div>
          )}

          {/* Dark gradient overlay on hover for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* ── Week Number Badge ── */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: week.color }}
        >
          <span className="text-white font-bold text-sm tracking-wide">
            {week.isAssignment ? 'Assignment' : `Week ${String(week.id).padStart(2, '0')}`}
          </span>
          <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
            <Icon size={14} className="text-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

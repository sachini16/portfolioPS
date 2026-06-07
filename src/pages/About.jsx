import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Info, CheckCircle2, Target, BookOpen, Users, Lightbulb,
  User, Building2, Calendar, Briefcase, GraduationCap, ChevronLeft
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FloatingBlob from '../components/FloatingBlob';

const pillars = [
  { icon: BookOpen, label: 'Academic Growth', color: '#1E3A8A', bg: '#1E3A8A15' },
  { icon: Users, label: 'Team Collaboration', color: '#1D4ED8', bg: '#1D4ED815' },
  { icon: Target, label: 'Goal Setting', color: '#2563EB', bg: '#2563EB15' },
  { icon: Lightbulb, label: 'Critical Thinking', color: '#3B82F6', bg: '#3B82F615' },
];

export default function About() {
  return (
    <PageTransition>
      <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
        {/* ── Background Image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home_bg.jpg"
            alt="Professional Skills Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Light frosted overlay — keeps theme airy and readable */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(239,246,255,0.88) 0%, rgba(219,234,254,0.82) 40%, rgba(191,219,254,0.70) 70%, rgba(147,197,253,0.50) 100%)',
            }}
          />
          {/* Subtle top vignette so navbar blends */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
        </div>

        <FloatingBlob color="#1D4ED8" size={450} top="-80px" right="-100px" delay={1} />
        <FloatingBlob color="#93C5FD" size={350} bottom="0" left="-80px" delay={3} />
        <div className="absolute inset-0 opacity-25 dot-pattern z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:text-dark transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 shadow-card">
              <Info size={16} style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium text-secondary">About This Portfolio</span>
            </div>
            <h1 className="font-bold text-dark mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              About This <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-secondary max-w-xl mx-auto text-lg">
              Understanding the purpose and scope of this professional skills journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-8 shadow-card mb-6">
                <p className="text-secondary leading-relaxed text-base mb-5">
                  This portfolio showcases my learning journey throughout the{' '}
                  <span className="font-semibold" style={{ color: '#1D4ED8' }}>Professional Skills</span> module at{' '}
                  <span className="font-semibold" style={{ color: '#1D4ED8' }}>SCU</span>. Each week represents a
                  different area of personal and professional development, including emotional intelligence,
                  communication, teamwork, leadership, problem-solving, and career readiness.
                </p>
                <p className="text-secondary leading-relaxed text-base">
                  The purpose of this portfolio is to document my growth, reflect on learning experiences,
                  and demonstrate the development of practical skills that will support my future academic
                  and professional career.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  'Emotional Intelligence & self-awareness',
                  'Professional Skills & self-development',
                  'Crafting an Effective CV',
                  'Professional Responsibilities & Codes of Ethics',
                  'Interview Skills & Job Hunting',
                  'Speaking Skills & Meetings',
                  'Telephone Etiquette & Customer Service',
                  'The Art of Negotiation',
                  'Grooming & Workplace Etiquette',
                  'Dining Etiquette & Table Manners',
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="text-slate-700 font-semibold text-xs leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Student Profile Card */}
              <div className="relative w-full">
                <div
                  className="absolute -inset-1 rounded-3xl blur-lg opacity-20"
                  style={{ background: 'linear-gradient(135deg, #1D4ED8, #60A5FA)' }}
                />
                <div
                  className="relative rounded-3xl p-6 shadow-xl border border-white/80 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)' }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

                  {/* Identity Block */}
                  <div className="border-b border-blue-100/60 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">A S J De Zoysa Rajapaksha</h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">Student Scholar</p>
                  </div>

                  {/* Academic Info Rows */}
                  <div className="space-y-3.5">
                    {[
                      { icon: GraduationCap, label: 'Student ID', value: 'SA24610316', color: '#1E3A8A', bg: '#1E3A8A12' },
                      { icon: Building2, label: 'University', value: 'SCU', color: '#1D4ED8', bg: '#1D4ED812' },
                      { icon: Calendar, label: 'Year', value: 'Year 2', color: '#2563EB', bg: '#2563EB12' },
                      { icon: BookOpen, label: 'Semester', value: 'Semester 2', color: '#3B82F6', bg: '#3B82F612' },
                      { icon: Briefcase, label: 'Module', value: 'Professional Skills', color: '#60A5FA', bg: '#60A5FA12' },
                    ].map(({ icon: Icon, label, value, color, bg }) => (
                      <div key={label} className="flex items-center gap-3.5 p-2 rounded-xl transition-all duration-200 hover:bg-white/50">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                          <Icon size={16} style={{ color }} />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider leading-none mb-1">{label}</p>
                          <p className="text-xs font-bold text-slate-700 leading-none">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {pillars.map(({ icon: Icon, label, color, bg }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="glass rounded-xl p-3 flex items-center gap-2.5"
                    style={{ boxShadow: '0px 4px 16px rgba(29,78,216,0.08)' }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                    <span className="text-xs font-semibold text-dark">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

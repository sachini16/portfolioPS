import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap, User, Building2, Calendar, BookOpen, Briefcase,
  ArrowRight, Info, LayoutGrid
} from 'lucide-react';
import FloatingBlob from '../components/FloatingBlob';
import PageTransition from '../components/PageTransition';
import { weeksData } from '../data/weeksData';
import WeekCard from '../components/WeekCard';

const fadeUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };

export default function Home() {
  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const element = document.getElementById('portfolio-weeks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAssignment = (e) => {
    e.preventDefault();
    const element = document.getElementById('portfolio-assignment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

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

        {/* Soft decorative blobs on top of overlay */}
        <div className="absolute top-[-80px] left-[-100px] w-72 h-72 rounded-full blur-3xl opacity-20 z-0" style={{ background: '#1D4ED8' }} />
        <div className="absolute bottom-[-40px] right-[-60px] w-64 h-64 rounded-full blur-3xl opacity-15 z-0" style={{ background: '#60A5FA' }} />

        <div className="absolute inset-0 opacity-10 dot-pattern z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full py-20 text-center flex flex-col items-center">
          <motion.div
            {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 shadow-card border border-blue-200/60"
            style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)' }}
          >
            <GraduationCap size={16} style={{ color: '#1D4ED8' }} />
            <span className="text-sm font-medium" style={{ color: '#1E3A8A' }}>SCU &nbsp;·&nbsp; Professional Skills Module</span>
          </motion.div>

          <motion.h1
            {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold leading-tight mb-6 max-w-4xl"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#0F172A' }}
          >
            Professional Skills{' '}
            <span className="gradient-text block mt-2">Learning Journey</span>
          </motion.h1>

          <motion.p
            {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ color: '#334155' }}
          >
            A curated collection of weekly learning experiences, reflections, and professional
            development activities completed throughout the Professional Skills module at SCU.
          </motion.p>

          <motion.div
            {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              id="hero-view-portfolio-btn"
              href="#portfolio-weeks"
              onClick={scrollToPortfolio}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)' }}
            >
              View Portfolio <ArrowRight size={16} />
            </a>
            <a
              id="hero-assignment-btn"
              href="#portfolio-assignment"
              onClick={scrollToAssignment}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)' }}
            >
              Assignment <ArrowRight size={16} />
            </a>
            <Link
              id="hero-about-btn"
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                color: '#1D4ED8',
                background: 'rgba(255,255,255,0.60)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(96,165,250,0.55)',
                boxShadow: '0 4px 20px rgba(29,78,216,0.10), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              About <Info size={16} />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ── PORTFOLIO WEEKS ── */}
      <section id="portfolio-weeks" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #D1E2FF 100%)', borderTop: '1px solid rgba(29, 78, 216, 0.08)' }}>
        <FloatingBlob color="#1D4ED8" size={400} top="-60px"  left="-100px"  delay={0} />
        <FloatingBlob color="#93C5FD" size={350} bottom="10%" right="-80px" delay={2} />
        <div className="absolute inset-0 opacity-25 dot-pattern" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 shadow-card">
              <LayoutGrid size={16} style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium text-secondary">
                {weeksData.filter(w => !w.isAssignment).length} Weeks · Completed
              </span>
            </div>
            <h2 className="font-bold text-dark text-3xl mb-4">
              Portfolio <span className="gradient-text">Weeks</span>
            </h2>
            <p className="text-secondary max-w-xl mx-auto text-lg">
              Explore each week's learning experiences, reflections, and skill development throughout the Professional Skills module.
            </p>
          </motion.div>

          {/* Cards Grid — Weeks 1 to 9 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeksData.filter(w => !w.isAssignment && w.id !== 10).map((week, index) => (
              <WeekCard key={week.id} week={week} index={index} />
            ))}
          </div>

          {/* Week 10 Centered on its own row */}
          <div className="flex justify-center mt-8">
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
              {weeksData.find(w => w.id === 10) && (
                <WeekCard week={weeksData.find(w => w.id === 10)} index={9} />
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ── ASSIGNMENT SECTION ── */}
      <section id="portfolio-assignment" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #D1E2FF 0%, #EFF6FF 100%)', borderTop: '1px solid rgba(29, 78, 216, 0.08)' }}>
        <FloatingBlob color="#3B82F6" size={350} top="-40px" right="-80px" delay={3} />
        <div className="absolute inset-0 opacity-20 dot-pattern" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 shadow-card">
              <BookOpen size={16} style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium text-secondary">Final Module Assignment</span>
            </div>
            <h2 className="font-bold text-dark text-3xl mb-4">
              Assignment
            </h2>
            <p className="text-secondary max-w-xl mx-auto text-lg">
              View the final assignment representing the synthesis of learning outcomes, skill developments, and personal reflections.
            </p>
          </motion.div>

          {/* Centered Assignment Card */}
          <div className="flex justify-center">
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
              {weeksData.find(w => w.isAssignment) && (
                <WeekCard week={weeksData.find(w => w.isAssignment)} index={10} />
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

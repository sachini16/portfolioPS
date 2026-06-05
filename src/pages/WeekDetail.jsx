import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ChevronLeft, CheckCircle2,
  BookOpen, Lightbulb, Star, Tag
} from 'lucide-react';
import { weeksData } from '../data/weeksData';
import PageTransition from '../components/PageTransition';
import FloatingBlob from '../components/FloatingBlob';
import PdfViewer from '../components/PdfViewer';

export default function WeekDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const weekId = parseInt(id, 10);
  const week = weeksData.find((w) => w.id === weekId);
  const [activeImage, setActiveImage] = useState(null);

  if (!week) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold text-dark">Week not found.</p>
        <Link to="/" className="text-primary underline font-medium">Back to Portfolio</Link>
      </div>
    );
  }

  const Icon = week.icon;
  const prev = weeksData.find((w) => w.id === weekId - 1);
  const next = weeksData.find((w) => w.id === weekId + 1);
  const renderSectionImage = (imgUrl, title, isSmall = false) => {
    if (!imgUrl) return null;
    return (
      <div className="flex justify-center mt-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => setActiveImage({ url: imgUrl, title })}
          className={`relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2 max-w-full ${isSmall ? 'md:max-w-md' : 'md:max-w-2xl'}`}
        >
          <img
            src={imgUrl}
            alt={title}
            className={`w-auto h-auto max-w-full object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02] ${isSmall ? 'max-h-[220px]' : 'max-h-[500px]'}`}
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
            <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              Click to zoom
            </span>
          </div>
        </motion.div>
      </div>
    );
  };

  const renderSection = (section, idx) => {
    if (section.type === 'text') {
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-4">{section.title}</h2>
          {section.subtitle && <p className="text-sm md:text-base font-semibold text-blue-600 mb-3">{section.subtitle}</p>}
          {section.image ? (
            <div className="flex flex-col md:flex-row md:gap-10 md:items-center">
              <div className="flex-1 text-secondary text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line">
                {section.content}
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveImage({ url: section.image, title: section.title })}
                className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2 flex-shrink-0 md:w-64 lg:w-80 mt-6 md:mt-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto max-h-[320px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                  <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Click to zoom
                  </span>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="text-secondary text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {section.content}
            </div>
          )}
        </motion.div>
      );
    }
    if (section.type === 'reflection') {
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-6">{section.title}</h2>
          <div className={`flex flex-col ${section.image ? 'md:flex-row md:gap-8 md:items-center' : ''}`}>
            <ul className="flex-1 space-y-3">
              {section.points && section.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-secondary text-sm md:text-base leading-relaxed">{point}</p>
                </motion.li>
              ))}
            </ul>
            {section.image && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveImage({ url: section.image, title: section.title })}
                className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2 flex-shrink-0 md:w-56 lg:w-72 mt-6 md:mt-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto max-h-[280px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                  <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Click to zoom
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      );
    }
    if (section.type === 'list') {
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-3">{section.title}</h2>
          {section.subtitle && <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">{section.subtitle}</p>}
          <div className={`flex flex-col ${section.image ? 'md:flex-row md:gap-8 md:items-center' : ''}`}>
            <div className="flex-1">
              <ul className="space-y-2 mb-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm md:text-base text-secondary">
                    <span className="font-bold text-blue-600 mt-0.5">•</span>
                    <span>
                      <strong className="text-slate-800">{item.bold}</strong>{item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {section.image && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveImage({ url: section.image, title: section.title })}
                className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2 flex-shrink-0 md:w-64 lg:w-80 mt-4 md:mt-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto max-h-[320px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                  <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Click to zoom
                  </span>
                </div>
              </motion.div>
            )}
          </div>
          {section.footer && <p className="text-xs md:text-sm text-slate-500 italic leading-relaxed pt-3 border-t border-slate-100 mt-4">{section.footer}</p>}
        </motion.div>
      );
    }
    if (section.type === 'comparison') {
      const showImageSide = section.image && section.imagePosition !== 'bottom';
      const showImageBottom = section.image && section.imagePosition === 'bottom';

      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-3">{section.title}</h2>
          {section.subtitle && <p className="text-sm md:text-base text-slate-500 mb-5">{section.subtitle}</p>}

          <div className={`flex flex-col ${showImageSide ? 'md:flex-row md:gap-8 md:items-center' : ''}`}>
            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-6 mb-5">
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                  <h4 className="font-bold text-blue-800 text-base mb-3">{section.col1.title}</h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-3">{section.col1.description}</p>
                  <ul className="space-y-2">
                    {section.col1.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                  <h4 className="font-bold text-blue-800 text-base mb-3">{section.col2.title}</h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-3">{section.col2.description}</p>
                  <ul className="space-y-2">
                    {section.col2.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {section.footer && <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{section.footer}</p>}
            </div>

            {showImageSide && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveImage({ url: section.image, title: section.title })}
                className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2 flex-shrink-0 md:w-60 lg:w-72 mt-6 md:mt-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto max-h-[300px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                  <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Click to zoom
                  </span>
                </div>
              </motion.div>
            )}
          </div>
          {showImageBottom && renderSectionImage(section.image, section.title, section.imageSize === 'small')}
        </motion.div>
      );
    }
    if (section.type === 'components') {
      const showImageSide = section.image && (section.imagePosition === 'right' || section.imagePosition === 'left' || section.imagePosition === 'side');
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative space-y-6"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl border-b border-slate-100 pb-3 mb-4">{section.title}</h2>

          <div className={`flex flex-col ${showImageSide ? 'md:flex-row md:gap-8 md:items-center' : ''}`}>
            <div className="flex-1 space-y-6">
              {section.components.map((comp, cIdx) => (
                <div key={cIdx} className="space-y-3 border-b border-slate-100 last:border-0 pb-5 last:pb-0">
                  <h4 className="font-bold text-blue-700 text-base md:text-lg">{comp.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{comp.desc}</p>

                  {comp.bullets && (
                    <ul className="space-y-2 pl-2 mt-2">
                      {comp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs md:text-sm text-secondary">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {comp.subsections && (
                    <div className="grid sm:grid-cols-2 gap-4 mt-3">
                      {comp.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs md:text-sm shadow-sm">
                          <h5 className="font-bold text-slate-700 mb-1.5">{sub.title}</h5>
                          <p className="text-slate-500 leading-relaxed">{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {comp.footer && <p className="text-[10px] md:text-xs text-slate-400 italic pt-1">{comp.footer}</p>}
                </div>
              ))}
            </div>

            {showImageSide && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveImage({ url: section.image, title: section.title })}
                className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2 flex-shrink-0 md:w-64 lg:w-72 mt-6 md:mt-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto max-h-[240px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                  <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Click to zoom
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {!showImageSide && renderSectionImage(section.image, section.title, section.imageSize === 'small')}
        </motion.div>
      );
    }
    if (section.type === 'table') {
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative overflow-hidden"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-4">{section.title}</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  {section.headers.map((h, i) => (
                    <th key={i} className="p-4 font-bold text-slate-700 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-4 text-secondary font-medium">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {renderSectionImage(section.image, section.title, section.imageSize === 'small')}
        </motion.div>
      );
    }
    if (section.type === 'documents') {
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative space-y-8"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-2">{section.title}</h2>
          {section.docs && section.docs.map((doc, docIdx) => (
            <div key={docIdx} className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-7 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}
                />
                <h3 className="font-bold text-slate-800 text-lg md:text-xl">{doc.title}</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-4">
                <PdfViewer url={doc.url} />
              </div>
            </div>
          ))}
        </motion.div>
      );
    }
    if (section.type === 'gallery') {
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full relative space-y-10"
        >
          <h2 className="font-bold text-dark text-xl md:text-2xl mb-2">{section.title}</h2>
          {section.categories && section.categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-7 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}
                />
                <h3 className="font-bold text-slate-800 text-lg md:text-xl">{cat.name}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cat.images.map((img, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.04 * imgIdx }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setActiveImage({ url: img.url, title: img.title })}
                    className="relative aspect-square rounded-xl overflow-hidden border border-slate-100 shadow-sm cursor-zoom-in group bg-slate-50/50"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-white text-[10px] md:text-xs font-semibold drop-shadow-md">
                        {img.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      );
    }
    return null;
  };

  const renderAllSections = () => {
    if (!week.sections) return null;
    const rendered = [];
    week.sections.forEach((section, idx) => {
      rendered.push(renderSection(section, idx));
      if (idx < week.sections.length - 1) {
        rendered.push(
          <div key={`br-${idx}`}>
            <br />
            <br />
            <br />
          </div>
        );
      }
    });
    return rendered;
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        <FloatingBlob color={week.color} size={380} top="-60px" right="-80px" delay={0} />
        <FloatingBlob color="#EC4899" size={280} bottom="10%" left="-60px" delay={2} />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* ── Hero Banner ── */}
        <div className="relative pt-32 pb-16 px-6 overflow-hidden">
          {week.bannerImage && (
            <div className="absolute inset-0 z-0">
              <img
                src={week.bannerImage}
                alt={`${week.title} Cover`}
                className="w-full h-full object-cover object-center"
              />
              {/* Light frosted overlay matching the theme */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(239,246,255,0.92) 0%, rgba(219,234,254,0.85) 45%, rgba(191,219,254,0.72) 75%, rgba(147,197,253,0.55) 100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
            </div>
          )}
          {!week.bannerImage && (
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `linear-gradient(135deg, ${week.color}10 0%, ${week.color}05 100%)`,
              }}
            />
          )}
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Back */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-secondary text-sm font-medium mb-8 hover:text-dark transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Portfolio
            </motion.button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-card"
                style={{ background: `linear-gradient(135deg, ${week.color}, ${week.color}99)` }}
              >
                <Icon size={38} className="text-white" />
              </motion.div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="flex flex-wrap items-center gap-3 mb-2"
                >
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: week.color }}
                  >
                    {week.isAssignment ? 'Assignment' : `Week ${String(week.id).padStart(2, '0')}`}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-success">
                    <CheckCircle2 size={13} /> {week.status}
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="font-bold text-dark mb-2"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
                >
                  {week.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-secondary text-base"
                >
                  {week.shortDescription}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="relative max-w-5xl mx-auto px-6 py-12">

          {/* ─── Top Overview Row ─── */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Key Topics */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-3xl p-6 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#2563EB15' }}>
                    <BookOpen size={16} className="text-primary" />
                  </div>
                  <h2 className="font-bold text-dark text-sm">Key Topics</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {week.keyTopics.map((topic, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.25 + i * 0.04 }}
                      className="flex items-center gap-2 text-xs text-secondary"
                    >
                      <Tag size={10} className="text-slate-400 flex-shrink-0" />
                      <span>{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Week Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="rounded-3xl p-6 text-white shadow-card flex flex-col justify-center"
              style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
            >
              <div>
                <p className="font-bold text-base mb-1">{week.isAssignment ? 'Assignment Summary' : 'Week Summary'}</p>
                <div className="space-y-3 mt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{week.isAssignment ? 'Type' : 'Week Number'}</span>
                    <span className="font-semibold">{week.isAssignment ? 'Assignment' : String(week.id).padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Topics Covered</span>
                    <span className="font-semibold">{week.keyTopics.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Status</span>
                    <span className="font-semibold">{week.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <br />
          <br />
          <br />

          {/* ─── Details Section (Full Width, New Paper Style) ─── */}
          <div className="w-full">
            {week.sections ? (
              <>
                {renderAllSections()}

                <br />
                <br />
                <br />

                {/* Learning Outcomes & Skills Gained */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#22C55E15' }}>
                      <Star size={18} style={{ color: '#22C55E' }} />
                    </div>
                    <h2 className="font-bold text-dark text-lg">Learning Outcomes & Skills Gained</h2>
                  </div>


                  {/* Learning Outcome & Skill Gained Details */}
                  {week.isAssignment ? (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-4">Learning Outcomes</h3>
                        <ul className="space-y-3">
                          {week.learningOutcomes && week.learningOutcomes.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-secondary text-xs md:text-sm">
                              <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-4">Skills Gained</h3>
                        <div className="flex flex-wrap gap-2">
                          {week.skillsGained && week.skillsGained.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                              style={{ background: `${week.color}12`, color: week.color }}
                            >
                              <CheckCircle2 size={12} />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      {week.learningOutcomeImage && (
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          onClick={() => setActiveImage({ url: week.learningOutcomeImage, title: 'Learning Outcomes' })}
                          className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2"
                        >
                          <p className="text-xs font-semibold text-slate-500 mb-2 text-center">Learning Outcomes</p>
                          <img
                            src={week.learningOutcomeImage}
                            alt="Learning Outcomes"
                            className="w-full h-auto max-h-[400px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                            <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                              Click to zoom
                            </span>
                          </div>
                        </motion.div>
                      )}
                      {week.skillGainedImage && (
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          onClick={() => setActiveImage({ url: week.skillGainedImage, title: 'Skills Gained' })}
                          className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2"
                        >
                          <p className="text-xs font-semibold text-slate-500 mb-2 text-center">Skills Gained</p>
                          <img
                            src={week.skillGainedImage}
                            alt="Skills Gained"
                            className="w-full h-auto max-h-[400px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                            <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                              Click to zoom
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </>
            ) : (
              <>
                {/* My Reflection */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#F59E0B15' }}>
                      <Lightbulb size={18} style={{ color: '#F59E0B' }} />
                    </div>
                    <h2 className="font-bold text-dark text-xl md:text-2xl">My Reflection</h2>
                  </div>
                  <div
                    className="border-l-4 pl-5 py-1"
                    style={{ borderColor: week.color }}
                  >
                    <p className="text-secondary text-sm md:text-base leading-loose whitespace-pre-line">{week.reflection}</p>
                  </div>
                </motion.div>

                <br />
                <br />
                <br />

                {/* Learning Outcomes & Skills Gained */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl w-full"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#22C55E15' }}>
                      <Star size={18} style={{ color: '#22C55E' }} />
                    </div>
                    <h2 className="font-bold text-dark text-lg">Learning Outcomes & Skills Gained</h2>
                  </div>


                  {/* Learning Outcome & Skill Gained Details */}
                  {week.isAssignment ? (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-4">Learning Outcomes</h3>
                        <ul className="space-y-3">
                          {week.learningOutcomes && week.learningOutcomes.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-secondary text-xs md:text-sm">
                              <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-4">Skills Gained</h3>
                        <div className="flex flex-wrap gap-2">
                          {week.skillsGained && week.skillsGained.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                              style={{ background: `${week.color}12`, color: week.color }}
                            >
                              <CheckCircle2 size={12} />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      {week.learningOutcomeImage && (
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          onClick={() => setActiveImage({ url: week.learningOutcomeImage, title: 'Learning Outcomes' })}
                          className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2"
                        >
                          <p className="text-xs font-semibold text-slate-500 mb-2 text-center">Learning Outcomes</p>
                          <img
                            src={week.learningOutcomeImage}
                            alt="Learning Outcomes"
                            className="w-full h-auto max-h-[400px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                            <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                              Click to zoom
                            </span>
                          </div>
                        </motion.div>
                      )}
                      {week.skillGainedImage && (
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          onClick={() => setActiveImage({ url: week.skillGainedImage, title: 'Skills Gained' })}
                          className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md cursor-zoom-in group bg-slate-50/50 p-2"
                        >
                          <p className="text-xs font-semibold text-slate-500 mb-2 text-center">Skills Gained</p>
                          <img
                            src={week.skillGainedImage}
                            alt="Skills Gained"
                            className="w-full h-auto max-h-[400px] object-contain rounded-xl mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                            <span className="bg-white/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                              Click to zoom
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </div>



          {/* ── Navigation ── */}
          {!week.isAssignment && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              {prev ? (
                <Link
                  to={`/week/${prev.id}`}
                  className="flex items-center gap-3 glass rounded-2xl px-5 py-4 shadow-card hover:shadow-card-hover transition-all duration-300 group w-full sm:w-auto"
                >
                  <ArrowLeft size={18} className="text-primary group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-secondary">{prev.isAssignment ? 'Assignment' : 'Previous Week'}</p>
                    <p className="text-sm font-semibold text-dark">{prev.title}</p>
                  </div>
                </Link>
              ) : <div />}

              <Link
                to="/"
                className="px-5 py-3 rounded-xl text-sm font-semibold text-white shadow-card transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)' }}
              >
                Back to Portfolio
              </Link>

              {next && !next.isAssignment ? (
                <Link
                  to={`/week/${next.id}`}
                  className="flex items-center gap-3 glass rounded-2xl px-5 py-4 shadow-card hover:shadow-card-hover transition-all duration-300 group w-full sm:w-auto justify-end"
                >
                  <div className="text-right">
                    <p className="text-xs text-secondary">Next Week</p>
                    <p className="text-sm font-semibold text-dark">{next.title}</p>
                  </div>
                  <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : <div />}
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
              />
              <div className="p-3 text-center bg-white border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-800">{activeImage.title}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center text-lg font-bold transition-colors shadow-lg cursor-pointer border-0"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

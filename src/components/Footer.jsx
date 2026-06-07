import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0F172A' }}>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2" style={{ background: '#1D4ED8' }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2" style={{ background: '#60A5FA' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1D4ED8, #60A5FA)' }}>
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Professional Skills</p>
                <p className="text-slate-400 text-xs leading-tight">Portfolio · SCU</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A curated collection of weekly learning experiences and professional development activities completed at SCU.
            </p>
          </div>

          {/* Details */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Portfolio Info</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><span className="text-slate-500">Created by:</span> <span className="text-white font-medium">A S J De Zoysa Rajapaksha</span></li>
              <li><span className="text-slate-500">Student ID:</span> <span className="text-white font-medium">SA24610316</span></li>
              <li><span className="text-slate-500">University:</span> <span className="text-white font-medium">SCU</span></li>
              <li><span className="text-slate-500">Academic Year:</span> <span className="text-white font-medium">Year 2 – Semester 2</span></li>
              <li><span className="text-slate-500">Module:</span> <span className="text-white font-medium">Professional Skills</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none mb-0.5">Telephone</p>
                  <a href="tel:0719941203" className="hover:text-white font-medium transition-colors">0719941203</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none mb-0.5">Email</p>
                  <a href="mailto:asjrajapaksha2001@gmail.com" className="hover:text-white font-medium transition-colors break-all">asjrajapaksha2001@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2026 A S J De Zoysa Rajapaksha. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="fill-blue-400 text-blue-400" /> for SCU Professional Skills Module
          </p>
        </div>
      </div>
    </footer>
  );
}

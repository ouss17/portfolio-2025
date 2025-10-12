import { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { profile } from '../data/profile';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = showAll ? profile.experiences : profile.experiences.slice(0, 3);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Expérience Professionnelle
        </h2>

        <AnimatePresence initial={false}>
          <motion.div
            key={showAll ? 'all' : 'partial'}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto space-y-8 overflow-hidden"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                    </div>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.role}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-300">
                    <Calendar size={16} />
                    <span className="text-sm font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>

                {exp.achievements && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {profile.experiences.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Voir moins <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Voir plus <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

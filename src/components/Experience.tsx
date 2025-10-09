import { Briefcase, Calendar } from 'lucide-react';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Expérience Professionnelle
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {profile.experiences.map((exp, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

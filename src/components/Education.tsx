import { GraduationCap } from 'lucide-react';
import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="formation" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Formation & Certifications
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {profile.education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  {edu.school && (
                    <p className="text-blue-600 font-semibold mb-2">{edu.school}</p>
                  )}
                  {edu.details && (
                    <p className="text-slate-600">{edu.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🗣️</span>
                Langues
              </h3>
              <div className="space-y-3">
                {profile.languages.map((lang, idx) => (
                  <div key={idx}>
                    <p className="font-semibold">{lang.name}</p>
                    <p className="text-slate-300 text-sm">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Centres d'intérêt
              </h3>
              <ul className="space-y-2">
                {profile.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

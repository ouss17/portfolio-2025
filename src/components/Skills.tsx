import { Code, Database, Box, Wrench, GitBranch } from 'lucide-react';
import { profile } from '../data/profile';

const skillCategories = [
  {
    title: "Langages",
    icon: Code,
    items: profile.skills.languages,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Frameworks & Librairies",
    icon: Box,
    items: profile.skills.frameworks,
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "Bases de données",
    icon: Database,
    items: profile.skills.databases,
    color: "from-orange-600 to-amber-600"
  },
  {
    title: "Outils & DevOps",
    icon: Wrench,
    items: profile.skills.tools,
    color: "from-rose-600 to-pink-600"
  },
  {
    title: "Architectures",
    icon: GitBranch,
    items: profile.skills.architectures,
    color: "from-violet-600 to-purple-600"
  }
];

export default function Skills() {
  return (
    <section id="competences" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Compétences
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Méthodologies</h3>
            <div className="flex flex-wrap gap-3">
              {profile.skills.methodologies.map((method, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

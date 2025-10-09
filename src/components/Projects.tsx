import { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filterTag, setFilterTag] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = filterTag === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filterTag));

  return (
    <section id="projets" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Mes Projets
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filterTag === tag
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tag === 'all' ? 'Tous' : tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.key}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-500 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image principale du projet */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain h-full w-full"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                {project.link && (
                  <ExternalLink className="mx-auto text-blue-400 mb-2" size={24} />
                )}

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description[0]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-xs font-medium"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technos.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-xs"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technos.length > 3 && (
                    <span className="px-3 py-1 bg-slate-900 text-slate-400 rounded-full text-xs">
                      +{project.technos.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

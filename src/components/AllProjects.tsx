import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Tag, ArrowLeft, Github } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filterTag, setFilterTag] = useState<string>('all');
  const navigate = useNavigate();

  const allTags = ['all', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = filterTag === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filterTag));

  return (
    <section className="py-20 bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tous mes projets
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
          {filteredProjects.map((project) => {
            const hasMultipleVersions = project.versions.length > 1;
            const lastVersion = project.versions[project.versions.length - 1];

            // Cherche les liens github au niveau version, sinon au niveau projet
            const githubLink =
              lastVersion.githubLink ||
              project.githubLink ||
              null;
            const githubLinkBackend =
              lastVersion.githubLinkBackend ||
              project.githubLinkBackend ||
              null;

            return (
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                    {hasMultipleVersions && (
                      <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-1 rounded-full align-middle">
                        {lastVersion.version}
                      </span>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Voir le site"
                        className="text-blue-400 hover:text-blue-600 transition"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                    {githubLinkBackend ? (
                      <>
                        {githubLink && (
                          <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Frontend"
                            className="text-slate-300 hover:text-blue-500 transition flex items-center gap-1"
                          >
                            <Github size={20} />
                            <span className="text-xs">Front</span>
                          </a>
                        )}
                        <a
                          href={githubLinkBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Backend"
                          className="text-slate-300 hover:text-blue-500 transition flex items-center gap-1"
                        >
                          <Github size={20} />
                          <span className="text-xs">Back</span>
                        </a>
                      </>
                    ) : (
                      githubLink && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          className="text-slate-300 hover:text-blue-500 transition"
                        >
                          <Github size={20} />
                        </a>
                      )
                    )}
                  </div>

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
                    {lastVersion.technos.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-xs"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {lastVersion.technos.length > 3 && (
                      <span className="px-3 py-1 bg-slate-900 text-slate-400 rounded-full text-xs">
                        +{lastVersion.technos.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
import { X, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Version {
  version: string;
  technos: { name: string; percentage: number }[];
  slides?: { img: string; alt: string }[];
  video?: string;
}

interface Project {
  key: string;
  title: string;
  description: string[];
  image: string;
  tags: string[];
  versions: Version[];
  link?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [versionIdx, setVersionIdx] = useState(0);
  const currentVersion = project.versions[versionIdx];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Capture d'écran agrandie"
            className="max-w-full max-h-full rounded-xl shadow-2xl border-4 border-slate-700"
          />
        </div>
      )}

      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full my-8 shadow-2xl border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-white">
            {project.title}
            {project.versions.length > 1 && (
              <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-1 rounded-full align-middle">
                {currentVersion.version}
              </span>
            )}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors duration-200"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-6">
          {project.versions.length > 1 && (
            <div className="mb-6 flex gap-2">
              {project.versions.map((v, idx) => (
                <button
                  key={v.version}
                  onClick={() => setVersionIdx(idx)}
                  className={`px-4 py-2 rounded-full font-semibold text-xs transition-all duration-200 ${
                    versionIdx === idx
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {v.version}
                </button>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink size={20} />
              Voir directement le projet
            </a>
          )}

          <div className="mb-6">
            {project.description.map((desc, idx) => (
              <p key={idx} className="text-slate-300 mb-2 leading-relaxed">
                {desc}
              </p>
            ))}
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-4">Technologies utilisées</h4>
            <div className="space-y-3">
              {currentVersion.technos.map((tech, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">{tech.name}</span>
                    <span className="text-blue-400 font-semibold">{tech.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${tech.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-700 text-blue-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {currentVersion.slides && currentVersion.slides.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Captures d'écran</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentVersion.slides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.img}
                    alt={slide.alt}
                    className="rounded-lg border border-slate-700 w-full object-cover max-h-64 bg-slate-900 cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedImg(slide.img)}
                  />
                ))}
              </div>
            </div>
          )}

          {currentVersion.video && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Vidéo</h4>
              <video controls className="w-full rounded-lg border border-slate-700 bg-slate-900">
                <source src={currentVersion.video} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

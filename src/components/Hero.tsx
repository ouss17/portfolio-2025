import { Mail, Phone, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
              {profile.title}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {profile.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-blue-500"
            >
              <Mail size={20} />
              <span>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-blue-500"
            >
              <Phone size={20} />
              <span>{profile.phone}</span>
            </a>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
              <MapPin size={20} />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projets"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold border border-slate-700 hover:bg-slate-700/50 transition-all duration-300"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/profile';
import '../styles/contact.css';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Me Contacter
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Travaillons ensemble
              </h3>
              <p className="text-slate-300 text-lg">
                Je suis disponible pour discuter de vos projets et opportunités
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="contact-item flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300 mb-1">Email</p>
                  <p className="font-semibold">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="contact-item flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300 mb-1">Téléphone</p>
                  <p className="font-semibold">{profile.phone}</p>
                </div>
              </a>

              <div
                className="contact-item flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300 mb-1">Localisation</p>
                  <p className="font-semibold">{profile.location}</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/ousmane-diarra-065907189/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300 mb-1">LinkedIn</p>
                  <p className="font-semibold">Ousmane Diarra</p>
                </div>
              </a>

              <a
                href="https://github.com/ouss17"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-300 mb-1">GitHub</p>
                  <p className="font-semibold">@ouss17</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-slate-300 mb-4">Télécharger mon CV</p>
              <a
                href="/Ousmane_Diarra.pdf"
                download
                className="contact-cv-btn bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Télécharger CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

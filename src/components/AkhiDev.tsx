import { useNavigate } from "react-router-dom";
import logo from "../assets/akhidev/logo.png";
import { ArrowLeft, Users, Lightbulb, Brain, Zap, Headphones, Palette, Rocket, Globe, ExternalLink } from "lucide-react";

export default function AkhiDev() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-8 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </button>

        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="Logo Akhi Dev" className="w-24 h-24 mb-4 rounded-full shadow-lg bg-white" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Gentlemen &amp; Developers</h1>
          <p className="text-lg text-slate-300 text-center mb-4">
            Une équipe soudée, compétente et tournée vers l'impact.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-yellow-400" size={24} />
            <h2 className="text-2xl font-bold">Découvrez Akhi Dev</h2>
          </div>
          <p className="mb-6">
            <span className="font-bold text-white">Akhi Dev</span> est une organisation tech fondée par deux développeurs complémentaires, Abdoul Madec et moi-même, passionnés par le travail bien fait, l’innovation et la création d’outils utiles.
          </p>

          <div className="flex items-center gap-2 mb-3">
            <Users className="text-purple-400" size={22} />
            <span className="font-bold text-lg">L'équipe dirigeante</span>
          </div>
          <div className="mb-4 ml-6">
            <div className="mb-2">
              <span className="font-bold">Abdoul Madec</span>
              <a
                href="https://madec-abdoul.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-400 hover:underline inline-flex items-center gap-1 text-sm font-medium"
              >
                - Portfolio
                <ExternalLink size={16} />
              </a>
              <br />
              <span className="text-slate-300">Co-fondateur &amp; Dirigeant</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">Ousmane Diarra</span><br />
              <span className="text-slate-300">Co-fondateur &amp; Dirigeant</span>
            </div>
            <div>
              <span className="font-bold">Ali Madec</span><br />
              <span className="text-slate-300">Équipe technique</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 mt-6">
            <Lightbulb className="text-yellow-400" size={22} />
            <span className="font-bold text-lg">Ce qui nous définit</span>
          </div>
          <ul className="mb-4 ml-6 space-y-2">
            <li className="flex items-center gap-2">
              <Brain className="text-pink-400" size={18} />
              <span>Expertise web, mobile, embarqué, API, UX/UI.</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="text-orange-400" size={18} />
              <span>Efficacité, résultats concrets, satisfaction client.</span>
            </li>
            <li className="flex items-center gap-2">
              <Headphones className="text-pink-500" size={18} />
              <span>Recrutement sérieux, sans copinage, profils fiables.</span>
            </li>
            <li className="flex items-center gap-2">
              <Palette className="text-red-400" size={18} />
              <span>Design moderne, souci du détail, approche produit.</span>
            </li>
            <li className="flex items-center gap-2">
              <Rocket className="text-pink-400" size={18} />
              <span>Vision long terme, tech responsable et utile.</span>
            </li>
          </ul>

          <div className="mt-6 text-slate-300">
            <Globe className="text-blue-400 inline mr-2" size={18} />
            Découvrez les projets réalisés sous le label <span className="font-bold text-white">Akhi Dev</span> sur ce site. <span className="text-blue-300">D'autres arrivent très bientôt.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
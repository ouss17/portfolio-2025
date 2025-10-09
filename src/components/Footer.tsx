import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-slate-300">
            Créé avec <Heart size={18} className="text-red-500 fill-red-500" /> par Ousmane Diarra
          </p>
          <p className="text-slate-400 text-sm mt-2">
            {new Date().getFullYear()} - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}

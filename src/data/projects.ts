import kny from '../assets/projects/kny.png';
import pcbp from '../assets/projects/pcbp-accueil.png';
import streamingWorld from '../assets/projects/streaming_world.png';
import evilHunter from '../assets/projects/evil_hunter.png';
import chat from '../assets/projects/chat_num.png';
import pacman from '../assets/projects/pacman.png';
import card from '../assets/projects/payment_card.png';
import pegasus from '../assets/projects/pegasus_car.png';
import formateur from '../assets/projects/client_formateur.png';
import myStockage from '../assets/projects/verif_sites.png';
import tasbeeh from '../assets/projects/tasbeeh1.jpg';
import ps3Ui from '../assets/projects/ps3_ui.png';
import monades from '../assets/projects/monades1.png';
import evasion from '../assets/projects/evasion1.png';
import linked from '../assets/projects/linked1.jpg';
import todoreaction from '../assets/projects/todoreaction1.jpg';
import gachanote from '../assets/projects/gachanote1.jpg';
import jiamini from '../assets/projects/jiamini1.png';
import eclat from '../assets/projects/eclat1.png';
import portfolio from '../assets/projects/portfolio.png';

// Slides
import kny1 from '../assets/projects/kny1.png';
import kny2 from '../assets/projects/kny2.png';
import pcbp1 from '../assets/projects/pcbp-admin.png';
import pcbp2 from '../assets/projects/pcbp-list1.png';
import pcbp3 from '../assets/projects/pcbp-list2.png';
import pcbp4 from '../assets/projects/pcbp-produit.png';
import streamingWorld1 from '../assets/projects/streaming_world_episodes.png';
import streamingWorld2 from '../assets/projects/streaming_world_products_details.png';
import streamingWorld3 from '../assets/projects/streaming_world_products.png';
import streamingWorld4 from '../assets/projects/streaming_world_streaming.png';
import tchat1 from '../assets/projects/chat_num.png';
import tchat2 from '../assets/projects/chat_num1.png';
import cardVideo from '../assets/projects/card_number.mp4';
import tasbeeh1 from '../assets/projects/tasbeeh1.jpg';
import tasbeeh2 from '../assets/projects/tasbeeh2.jpg';
import tasbeeh3 from '../assets/projects/tasbeeh3.jpg';
import tasbeeh4 from '../assets/projects/tasbeeh4.jpg';
import monades1 from '../assets/projects/monades1.png';
import monades2 from '../assets/projects/monades2.png';
import monades3 from '../assets/projects/monades3.png';
import evasion1 from '../assets/projects/evasion1.png';
import evasion2 from '../assets/projects/evasion2.png';
import evasion3 from '../assets/projects/evasion3.png';
import evasion4 from '../assets/projects/evasion5.png';
import linked1 from '../assets/projects/linked1.jpg';
import linked2 from '../assets/projects/linked2.jpg';
import linked3 from '../assets/projects/linked3.jpg';
import linked4 from '../assets/projects/linked4.jpg';
import ps3UiSlide from '../assets/projects/ps3_ui.png';
import todoreaction1 from '../assets/projects/todoreaction1.jpg';
import todoreaction2 from '../assets/projects/todoreaction2.jpg';
import todoreaction3 from '../assets/projects/todoreaction3.jpg';
import todoreaction4 from '../assets/projects/todoreaction4.jpg';
import gachanote1 from '../assets/projects/gachanote1.jpg';
import gachanote2 from '../assets/projects/gachanote2.jpg';
import gachanote3 from '../assets/projects/gachanote3.jpg';
import gachanote4 from '../assets/projects/gachanote4.jpg';
import jiamini1 from '../assets/projects/jiamini1.png';
import jiamini2 from '../assets/projects/jiamini2.png';
import jiamini3 from '../assets/projects/jiamini3.png';
import jiamini4 from '../assets/projects/jiamini4.png';
import eclat1 from '../assets/projects/eclat1.png';
import eclat2 from '../assets/projects/eclat2.png';
import eclat3 from '../assets/projects/eclat3.png';
import eclat4 from '../assets/projects/eclat4.png';
import eclat5 from '../assets/projects/eclat5.png';
import eclat6 from '../assets/projects/eclat6.png';
import eclat7 from '../assets/projects/eclat7.png';
import portfolio1 from '../assets/projects/portfolio1.png';
import portfolio2 from '../assets/projects/portfolio2.png';
import portfolio3 from '../assets/projects/portfolio3.png';
import portfolio4 from '../assets/projects/portfolio4.png';
import portfolio5 from '../assets/projects/portfolio5.png';

export const projects = [
  {
    key: "kny",
    title: "Présentation kimetsu no yaiba",
    description: [
      "Un site de présentation de l'anime Kimetsu no Yaiba ou Demon Slayer de Koyoharu Goutouge et produit par Ufotable."
    ],
    image: kny,
    slides: [
      { img: kny1, alt: "Présentation 1" },
      { img: kny2, alt: "Présentation 2" }
    ],
    technos: [
      { name: "HTML", percentage: 70 },
      { name: "CSS", percentage: 25 },
      { name: "JS", percentage: 5 }
    ],
    tags: ["react", "html", "css", "js"]
  },
  {
    key: "pcbp",
    title: "Pc buying pro",
    description: [
      "Achetez des composants ou des tours déjà montées. Site programmé avec le modèle MVC."
    ],
    image: pcbp,
    slides: [
      { img: pcbp1, alt: "Admin" },
      { img: pcbp2, alt: "Liste 1" },
      { img: pcbp3, alt: "Liste 2" },
      { img: pcbp4, alt: "Produit" }
    ],
    technos: [
      { name: "PHP", percentage: 32 },
      { name: "HTML", percentage: 30 },
      { name: "CSS", percentage: 19 },
      { name: "SQL", percentage: 11 },
      { name: "JS", percentage: 8 }
    ],
    tags: ["php", "mvc", "html", "css", "sql", "js"]
  },
  {
    key: "streamingWorld",
    title: "Streaming world",
    description: [
      "Regardez vos animes préférés et accédez à la boutique en ligne. Présentation des personnages principaux en streaming."
    ],
    image: streamingWorld,
    slides: [
      { img: streamingWorld1, alt: "Episodes" },
      { img: streamingWorld2, alt: "Détails produits" },
      { img: streamingWorld3, alt: "Produits" },
      { img: streamingWorld4, alt: "Streaming" }
    ],
    technos: [
      { name: "HTML", percentage: 60 },
      { name: "CSS", percentage: 20 },
      { name: "PHP", percentage: 12 },
      { name: "SQL", percentage: 6 },
      { name: "JS", percentage: 2 }
    ],
    tags: ["mvc", "html", "css", "php", "sql", "js"]
  },
  {
    key: "evilHunter",
    title: "Evil hunter",
    description: [
      "Mini jeu JS/JQuery : combattez des monstres la nuit pour survivre !"
    ],
    image: evilHunter,
    slides: [
      { img: evilHunter, alt: "evil hunter" }
    ],
    technos: [
      { name: "JS", percentage: 52 },
      { name: "CSS", percentage: 31 },
      { name: "HTML", percentage: 17 }
    ],
    tags: ["js", "jquery", "html", "css"]
  },
  {
    key: "chat",
    title: "Tchat numérique",
    description: [
      "Tchat en temps réel avec espace offres d'emploi. PHP orienté objet et API."
    ],
    image: chat,
    slides: [
      { img: tchat1, alt: "Tchat 1" },
      { img: tchat2, alt: "Tchat 2" }
    ],
    technos: [
      { name: "PHP", percentage: 33 },
      { name: "HTML", percentage: 29 },
      { name: "CSS", percentage: 23 },
      { name: "JS", percentage: 9 },
      { name: "SQL", percentage: 6 }
    ],
    tags: ["php", "api", "html", "css", "js", "sql"]
  },
  {
    key: "pacman",
    title: "Pacman race",
    description: [
      "Mini jeu Pacman JS : qui mangera le plus de fruits ?"
    ],
    image: pacman,
    slides: [
      { img: pacman, alt: "pacman" }
    ],
    technos: [
      { name: "JS", percentage: 97 },
      { name: "HTML", percentage: 1.5 },
      { name: "CSS", percentage: 1.5 }
    ],
    tags: ["js", "html", "css"]
  },
  {
    key: "card",
    title: "Animation carte de paiement",
    description: [
      "Animation de carte de paiement pour un visuel plus attrayant !"
    ],
    image: card,
    video: cardVideo,
    slides: [
      { img: card, alt: "Carte" }
    ],
    technos: [
      { name: "HTML", percentage: 40 },
      { name: "CSS", percentage: 30 },
      { name: "JS", percentage: 30 }
    ],
    tags: ["html", "css", "js"]
  },
  {
    key: "pegasus",
    title: "Vente de voitures",
    description: [
      "Frontend d'un site de vente de voitures."
    ],
    image: pegasus,
    slides: [
      { img: pegasus, alt: "pegasus" }
    ],
    technos: [
      { name: "HTML", percentage: 50 },
      { name: "CSS", percentage: 35 },
      { name: "JS", percentage: 15 }
    ],
    tags: ["html", "css", "js"]
  },
  {
    key: "tasbeeh",
    title: "Tasbeeh",
    description: [
      "Application utilisant une API de Quran pour lire, écouter ou faire des évocations."
    ],
    image: tasbeeh,
    slides: [
      { img: tasbeeh1, alt: "Tasbeeh 1" },
      { img: tasbeeh2, alt: "Tasbeeh 2" },
      { img: tasbeeh3, alt: "Tasbeeh 3" },
      { img: tasbeeh4, alt: "Tasbeeh 4" }
    ],
    technos: [
      { name: "HTML", percentage: 66 },
      { name: "CSS", percentage: 24 },
      { name: "JS", percentage: 10 }
    ],
    tags: ["api", "html", "css", "js"]
  },
  {
    key: "formateur",
    title: "Liste de formateurs",
    description: [
      "Import d'un fichier excel de formateurs, gestion en base de données."
    ],
    image: formateur,
    slides: [
      { img: formateur, alt: "formateur" }
    ],
    technos: [
      { name: "JS", percentage: 35 },
      { name: "HTML", percentage: 30 },
      { name: "CSS", percentage: 20 },
      { name: "PHP", percentage: 8 },
      { name: "SQL", percentage: 7 }
    ],
    tags: ["php", "js", "html", "css", "sql"]
  },
  {
    key: "myStockage",
    title: "myStockage",
    description: [
      "Vérification d'état de sites (en ligne, stockage BDD, stockage FTP)."
    ],
    image: myStockage,
    slides: [
      { img: myStockage, alt: "stockage" }
    ],
    technos: [
      { name: "PHP", percentage: 47 },
      { name: "HTML", percentage: 26 },
      { name: "CSS", percentage: 21 },
      { name: "SQL", percentage: 6 }
    ],
    tags: ["php", "html", "css", "sql"]
  },
  {
    key: "monades",
    title: "Présentation entreprise",
    description: [
      "Site de présentation d'entreprise fait avec React."
    ],
    image: monades,
    slides: [
      { img: monades1, alt: "Monades 1" },
      { img: monades2, alt: "Monades 2" },
      { img: monades3, alt: "Monades 3" }
    ],
    technos: [
      { name: "REACT", percentage: 80 },
      { name: "NODEJS", percentage: 20 }
    ],
    tags: ["react", "nodejs"]
  },
  {
    key: "ps3Ui",
    title: "Playstation 3 UI",
    description: [
      "Reproduction de la navigation de la console Playstation 3."
    ],
    image: ps3Ui,
    slides: [
      { img: ps3UiSlide, alt: "ps3 ui" }
    ],
    technos: [
      { name: "HTML", percentage: 50 },
      { name: "CSS", percentage: 15 },
      { name: "JS", percentage: 35 }
    ],
    tags: ["js", "html", "css"]
  },
  {
    key: "evasion",
    title: "Projet EVASION",
    description: [
      "Projet EVASION du département des Hauts-de-Seine : gestion de contenus VR accessibles sur tablette et création de contenus VR."
    ],
    image: evasion,
    slides: [
      { img: evasion1, alt: "Evasion 1" },
      { img: evasion2, alt: "Evasion 2" },
      { img: evasion3, alt: "Evasion 3" },
      { img: evasion4, alt: "Evasion 4" }
    ],
    technos: [
      { name: "REACT", percentage: 60 },
      { name: "SYMFONY", percentage: 30 },
      { name: "FFMPEG", percentage: 8 },
      { name: "STORYBOOK", percentage: 2 }
    ],
    tags: ["react", "symfony", "ffmpeg", "storybook"]
  },
  {
    key: "linked",
    title: "Linked Mosque",
    description: [
      "Application pour suivre les horaires de prières de la mosquée et les actualités."
    ],
    image: linked,
    slides: [
      { img: linked1, alt: "Linked 1" },
      { img: linked2, alt: "Linked 2" },
      { img: linked3, alt: "Linked 3" },
      { img: linked4, alt: "Linked 4" }
    ],
    technos: [
      { name: "REACT NATIVE", percentage: 80 },
      { name: "PHP", percentage: 20 }
    ],
    tags: ["react native", "php"]
  },
  {
    key: "todoreaction",
    title: "ToDo'Réac'tion",
    description: [
      "ToDo'Réac'tion est une application de gestion de tâches moderne, réalisée avec React Native, Redux Toolkit et Expo Router.",
      "Fonctionnalités :",
      "- Ajout, édition et suppression de tâches",
      "- Gestion de la date et de l'heure d'échéance pour chaque tâche",
      "- Catégorisation des tâches, couleurs personnalisées, filtres par catégorie",
      "- Thèmes visuels persistants",
      "- Interface moderne et responsive"
    ],
    image: todoreaction,
    slides: [
      { img: todoreaction1, alt: "todoreaction 1" },
      { img: todoreaction2, alt: "todoreaction 2" },
      { img: todoreaction3, alt: "todoreaction 3" },
      { img: todoreaction4, alt: "todoreaction 4" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "REACT NATIVE", percentage: 30 },
      { name: "TYPESCRIPT", percentage: 20 },
      { name: "REDUX TOOLKIT", percentage: 10 }
    ],
    tags: ["expo", "react native", "typescript", "redux toolkit"]
  },
  {
    key: "gachanote",
    title: "GachaNote",
    description: [
      "GachaNote est l'outil idéal pour tous les joueurs de jeux gacha qui souhaitent :",
      "- Suivre précisément leurs dépenses et tirages sur chaque jeu.",
      "- Visualiser leur historique et leurs statistiques.",
      "- Prendre conscience de leurs habitudes de consommation.",
      "- Comparer leurs dépenses entre plusieurs jeux et sur différentes périodes."
    ],
    image: gachanote,
    slides: [
      { img: gachanote1, alt: "gachanote 1" },
      { img: gachanote2, alt: "gachanote 2" },
      { img: gachanote3, alt: "gachanote 3" },
      { img: gachanote4, alt: "gachanote 4" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "REACT NATIVE", percentage: 30 },
      { name: "TYPESCRIPT", percentage: 20 },
      { name: "REDUX TOOLKIT", percentage: 10 }
    ],
    tags: ["expo", "react native", "typescript", "redux toolkit"]
  },
  {
    key: "jiamini",
    title: "Jiamini",
    description: [
      "Jiamini est une application mobile qui facilite l'apprentissage scolaire en Afrique en proposant des cours adaptés (PDF, vidéo, image, jeu).",
      "Elle propose aussi l'histoire de personnages historiques selon le pays sélectionné."
    ],
    image: jiamini,
    slides: [
      { img: jiamini1, alt: "jiamini 1" },
      { img: jiamini2, alt: "jiamini 2" },
      { img: jiamini3, alt: "jiamini 3" },
      { img: jiamini4, alt: "jiamini 4" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "JAVA (BACK)", percentage: 30 },
      { name: "REACT NATIVE", percentage: 15 },
      { name: "POSTGRESQL", percentage: 15 }
    ],
    tags: ["expo", "java", "react native", "postgresql"]
  },
  {
    key: "eclat",
    title: "Éclat Solidaire",
    description: [
      "Éclat Solidaire est un site qui recense les associations ayant peu de visibilité et les événements disponibles.",
      "On peut s'inscrire bénévolement à une association et faire des dons si on le souhaite."
    ],
    image: eclat,
    slides: [
      { img: eclat1, alt: "eclat 1" },
      { img: eclat2, alt: "eclat 2" },
      { img: eclat3, alt: "eclat 3" },
      { img: eclat4, alt: "eclat 4" },
      { img: eclat5, alt: "eclat 5" },
      { img: eclat6, alt: "eclat 6" },
      { img: eclat7, alt: "eclat 7" }
    ],
    technos: [
      { name: "REACT", percentage: 50 },
      { name: "NODEJS", percentage: 30 },
      { name: "JAVASCRIPT", percentage: 20 }
    ],
    tags: ["react", "nodejs", "js"]
  },
  {
    key: "portfolio2020",
    title: "Portfolio",
    description: [
      "Mon ancien portfolio présentant mes projets et compétences sur un design de windows 10."
    ],
    image: portfolio,
    slides: [
      { img: portfolio1, alt: "portfolio 1" },
      { img: portfolio2, alt: "portfolio 2" },
      { img: portfolio3, alt: "portfolio 3" },
      { img: portfolio4, alt: "portfolio 4" },
      { img: portfolio5, alt: "portfolio 5" }
    ],
    technos: [
      { name: "HTML", percentage: 40 },
      { name: "CSS", percentage: 35 },
      { name: "JAVASCRIPT", percentage: 25 }
    ],
    tags: ["html", "css", "js"],
    link: "https://portfolio-2020-vl56.vercel.app"
  }
];

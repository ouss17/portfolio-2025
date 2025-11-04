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
import gachanoteV2_1 from '../assets/projects/gachanote_v2_1.jpg';
import gachanoteV2_2 from '../assets/projects/gachanote_v2_2.jpg';
import gachanoteV2_3 from '../assets/projects/gachanote_v2_3.jpg';
import gachanoteV2_4 from '../assets/projects/gachanote_v2_4.jpg';
import gachanoteV2_5 from '../assets/projects/gachanote_v2_5.jpg';
import gachanoteV2_6 from '../assets/projects/gachanote_v2_6.jpg';
import gachanoteV2_7 from '../assets/projects/gachanote_v2_7.jpg';
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
import vaultMyPassword1 from '../assets/projects/vaultMyPassword_1.jpg';
import vaultMyPassword2 from '../assets/projects/vaultMyPassword_2.jpg';
import vaultMyPassword3 from '../assets/projects/vaultMyPassword_3.jpg';
import vaultMyPassword4 from '../assets/projects/vaultMyPassword_4.jpg';
import vaultMyPassword5 from '../assets/projects/vaultMyPassword_5.jpg';
import vaultMyPassword6 from '../assets/projects/vaultMyPassword_6.jpg';
import { g } from 'framer-motion/client';

export const projects = [
  {
    key: "kny",
    title: "Présentation kimetsu no yaiba",
    description: [
      "Un site de présentation de l'anime Kimetsu no Yaiba ou Demon Slayer de Koyoharu Goutouge et produit par Ufotable."
    ],
    image: kny,
    tags: ["react", "html", "css", "js"],
    githubLink: null,
    githubLinkBackend: null,
    versions: [
      {
        version: "v1",
        technos: [
          { name: "react", percentage: 70 },
          { name: "html", percentage: 70 },
          { name: "css", percentage: 25 },
          { name: "js", percentage: 5 }
        ],
        slides: [
          { img: kny1, alt: "Présentation 1" },
          { img: kny2, alt: "Présentation 2" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "pcbp",
    title: "Pc buying pro",
    description: [
      "Achetez des composants ou des tours déjà montées. Site programmé avec le modèle MVC."
    ],
    githubLink: "https://github.com/ouss17/pcbp",
    githubLinkBackend: null,
    image: pcbp,
    tags: ["php", "mvc", "html", "css", "sql", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "php", percentage: 32 },
          { name: "mvc", percentage: 32 },
          { name: "html", percentage: 30 },
          { name: "css", percentage: 19 },
          { name: "sql", percentage: 11 },
          { name: "js", percentage: 8 }
        ],
        slides: [
          { img: pcbp1, alt: "Admin" },
          { img: pcbp2, alt: "Liste 1" },
          { img: pcbp3, alt: "Liste 2" },
          { img: pcbp4, alt: "Produit" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "streamingWorld",
    title: "Streaming world",
    description: [
      "Regardez vos animes préférés et accédez à la boutique en ligne. Présentation des personnages principaux en streaming."
    ],
    githubLink: "https://github.com/AkhiDev-Official/Streaming-World",
    githubLinkBackend: null,
    image: streamingWorld,
    tags: ["mvc", "html", "css", "php", "sql", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "mvc", percentage: 30 },
          { name: "html", percentage: 60 },
          { name: "css", percentage: 20 },
          { name: "php", percentage: 12 },
          { name: "sql", percentage: 6 },
          { name: "js", percentage: 2 }
        ],
        slides: [
          { img: streamingWorld1, alt: "Episodes" },
          { img: streamingWorld2, alt: "Détails produits" },
          { img: streamingWorld3, alt: "Produits" },
          { img: streamingWorld4, alt: "Streaming" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "evilHunter",
    title: "Evil hunter",
    description: [
      "Mini jeu JS/JQuery : combattez des monstres la nuit pour survivre !"
    ],
    githubLink: "https://github.com/ouss17/evil_hunter",
    githubLinkBackend: null,
    image: evilHunter,
    tags: ["js", "jquery", "html", "css"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "js", percentage: 52 },
          { name: "jquery", percentage: 40 },
          { name: "html", percentage: 17 },
          { name: "css", percentage: 31 }
        ],
        slides: [
          { img: evilHunter, alt: "evil hunter" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "chat",
    title: "Tchat numérique",
    description: [
      "Tchat en temps réel avec espace offres d'emploi. PHP orienté objet et API."
    ],
    githubLink: "https://github.com/AkhiDev-Official/TchatNumerique",
    githubLinkBackend: null,
    image: chat,
    tags: ["php", "api", "html", "css", "js", "sql"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "php", percentage: 33 },
          { name: "api", percentage: 10 },
          { name: "html", percentage: 29 },
          { name: "css", percentage: 23 },
          { name: "js", percentage: 9 },
          { name: "sql", percentage: 6 }
        ],
        slides: [
          { img: tchat1, alt: "Tchat 1" },
          { img: tchat2, alt: "Tchat 2" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "pacman",
    title: "Pacman race",
    description: [
      "Mini jeu Pacman JS : qui mangera le plus de fruits ?"
    ],
    githubLink: "https://github.com/AkhiDev-Official/PacMan",
    githubLinkBackend: null,
    image: pacman,
    tags: ["js", "html", "css"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "js", percentage: 97 },
          { name: "html", percentage: 1.5 },
          { name: "css", percentage: 1.5 }
        ],
        slides: [
          { img: pacman, alt: "pacman" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "card",
    title: "Animation carte de paiement",
    description: [
      "Animation de carte de paiement pour un visuel plus attrayant !"
    ],
    githubLink: "https://github.com/AkhiDev-Official/Animated_paiement_card",
    githubLinkBackend: null,
    image: card,
    tags: ["html", "css", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "html", percentage: 40 },
          { name: "css", percentage: 30 },
          { name: "js", percentage: 30 }
        ],
        slides: [
          { img: card, alt: "Carte" }
        ],
        video: cardVideo,
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "pegasus",
    title: "Vente de voitures",
    description: [
      "Frontend d'un site de vente de voitures."
    ],
    githubLink: null,
    githubLinkBackend: null,
    image: pegasus,
    tags: ["html", "css", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "html", percentage: 50 },
          { name: "css", percentage: 35 },
          { name: "js", percentage: 15 }
        ],
        slides: [
          { img: pegasus, alt: "pegasus" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "tasbeeh",
    title: "Tasbeeh",
    description: [
      "Application utilisant une API de Quran pour lire, écouter ou faire des évocations."
    ],
    githubLink: "https://github.com/AkhiDev-Official/Tasbeeh-2.0-Web",
    githubLinkBackend: null,
    image: tasbeeh,
    tags: ["api", "html", "css", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "api", percentage: 20 },
          { name: "html", percentage: 66 },
          { name: "css", percentage: 24 },
          { name: "js", percentage: 10 }
        ],
        slides: [
          { img: tasbeeh1, alt: "Tasbeeh 1" },
          { img: tasbeeh2, alt: "Tasbeeh 2" },
          { img: tasbeeh3, alt: "Tasbeeh 3" },
          { img: tasbeeh4, alt: "Tasbeeh 4" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "formateur",
    title: "Liste de formateurs",
    description: [
      "Import d'un fichier excel de formateurs, gestion en base de données."
    ],
    githubLink: "https://github.com/ouss17/formateurs",
    githubLinkBackend: null,
    image: formateur,
    tags: ["php", "js", "html", "css", "sql"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "php", percentage: 8 },
          { name: "js", percentage: 35 },
          { name: "html", percentage: 30 },
          { name: "css", percentage: 20 },
          { name: "sql", percentage: 7 }
        ],
        slides: [
          { img: formateur, alt: "formateur" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "myStockage",
    title: "myStockage",
    description: [
      "Vérification d'état de sites (en ligne, stockage BDD, stockage FTP)."
    ],
    githubLink: "https://github.com/ouss17/myStockage",
    githubLinkBackend: null,
    image: myStockage,
    tags: ["php", "html", "css", "sql"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "php", percentage: 47 },
          { name: "html", percentage: 26 },
          { name: "css", percentage: 21 },
          { name: "sql", percentage: 6 }
        ],
        slides: [
          { img: myStockage, alt: "stockage" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "monades",
    title: "Présentation entreprise",
    description: [
      "Site de présentation d'entreprise fait avec React."
    ],
    githubLink: null,
    githubLinkBackend: null,
    image: monades,
    tags: ["react", "nodejs"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "react", percentage: 80 },
          { name: "nodejs", percentage: 20 }
        ],
        slides: [
          { img: monades1, alt: "Monades 1" },
          { img: monades2, alt: "Monades 2" },
          { img: monades3, alt: "Monades 3" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "ps3Ui",
    title: "Playstation 3 UI",
    description: [
      "Reproduction de la navigation de la console Playstation 3."
    ],
    githubLink: null,
    githubLinkBackend: null,
    image: ps3Ui,
    tags: ["html", "css", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "html", percentage: 50 },
          { name: "css", percentage: 15 },
          { name: "js", percentage: 35 }
        ],
        slides: [
          { img: ps3UiSlide, alt: "ps3 ui" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "evasion",
    title: "Projet EVASION",
    description: [
      "Projet EVASION du département des Hauts-de-Seine : gestion de contenus VR accessibles sur tablette et création de contenus VR."
    ],
    githubLink: null,
    githubLinkBackend: null,
    image: evasion,
    tags: ["react", "symfony", "ffmpeg", "storybook"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "react", percentage: 60 },
          { name: "symfony", percentage: 30 },
          { name: "ffmpeg", percentage: 8 },
          { name: "storybook", percentage: 2 }
        ],
        slides: [
          { img: evasion1, alt: "Evasion 1" },
          { img: evasion2, alt: "Evasion 2" },
          { img: evasion3, alt: "Evasion 3" },
          { img: evasion4, alt: "Evasion 4" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "linked",
    title: "Linked",
    description: [
      "Application pour suivre les horaires de prières de la mosquée et les actualités."
    ],
    image: linked,
    githubLink: "https://github.com/ouss17/linked_front",
    githubLinkBackend: "https://github.com/ouss17/linked_back",
    tags: ["react native", "php", "mysql", "expo", "nodejs", "mongodb"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "react native", percentage: 80 },
          { name: "php", percentage: 20 },
          { name: "mysql", percentage: 20 }
        ],
        slides: [
          { img: linked1, alt: "Linked v1 - 1" },
          { img: linked2, alt: "Linked v1 - 2" },
          { img: linked3, alt: "Linked v1 - 3" },
          { img: linked4, alt: "Linked v1 - 4" }
        ],
        githubLink: "https://github.com/ouss17/linked_front",
        githubLinkBackend: "https://github.com/ouss17/linked_back"
      },
      {
        version: "v2",
        githubLink: "https://github.com/ouss17/sajda-front",
        githubLinkBackend: "https://github.com/ouss17/sajda_back",
        technos: [
          { name: "expo", percentage: 40 },
          { name: "nodejs", percentage: 30 },
          { name: "mysql", percentage: 15 },
          { name: "mongodb", percentage: 15 }
        ],
        slides: [
          { img: linked1, alt: "Linked v2 - 1" },
          { img: linked2, alt: "Linked v2 - 2" },
          { img: linked3, alt: "Linked v2 - 3" },
          { img: linked4, alt: "Linked v2 - 4" }
        ]
      }
    ]
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
    githubLink: "https://github.com/ouss17/expo-todolist",
    githubLinkBackend: null,
    image: todoreaction,
    tags: ["expo", "react native", "typescript", "redux toolkit"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "expo", percentage: 40 },
          { name: "react native", percentage: 30 },
          { name: "typescript", percentage: 20 },
          { name: "redux toolkit", percentage: 10 }
        ],
        slides: [
          { img: todoreaction1, alt: "todoreaction 1" },
          { img: todoreaction2, alt: "todoreaction 2" },
          { img: todoreaction3, alt: "todoreaction 3" },
          { img: todoreaction4, alt: "todoreaction 4" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
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
    githubLink: "https://github.com/ouss17/gachanote",
    githubLinkBackend: null,
    image: gachanote,
    tags: ["expo", "react native", "typescript", "redux toolkit"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "expo", percentage: 60 },
          { name: "redux toolkit", percentage: 40 }
        ],
        slides: [
          { img: gachanote1, alt: "GachaNote v1 - 1" },
          { img: gachanote2, alt: "GachaNote v1 - 2" },
          { img: gachanote3, alt: "GachaNote v1 - 3" },
          { img: gachanote4, alt: "GachaNote v1 - 4" }
        ],
        githubLink: null,
        githubLinkBackend: null
      },
      {
        version: "v2",
        technos: [
          { name: "expo", percentage: 40 },
          { name: "react native", percentage: 30 },
          { name: "typescript", percentage: 20 },
          { name: "redux toolkit", percentage: 10 }
        ],
        slides: [
          { img: gachanoteV2_1, alt: "GachaNote v2 - 1" },
          { img: gachanoteV2_2, alt: "GachaNote v2 - 2" },
          { img: gachanoteV2_3, alt: "GachaNote v2 - 3" },
          { img: gachanoteV2_4, alt: "GachaNote v2 - 4" },
          { img: gachanoteV2_5, alt: "GachaNote v2 - 5" },
          { img: gachanoteV2_6, alt: "GachaNote v2 - 6" },
          { img: gachanoteV2_7, alt: "GachaNote v2 - 7" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "jiamini",
    title: "Jiamini",
    description: [
      "Jiamini est une application mobile qui facilite l'apprentissage scolaire en Afrique en proposant des cours adaptés (PDF, vidéo, image, jeu).",
      "Elle propose aussi l'histoire de personnages historiques selon le pays sélectionné."
    ],
    githubLink: null,
    githubLinkBackend: null,
    image: jiamini,
    tags: ["expo", "java", "react native", "postgresql"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "expo", percentage: 40 },
          { name: "java", percentage: 30 },
          { name: "react native", percentage: 15 },
          { name: "postgresql", percentage: 15 }
        ],
        slides: [
          { img: jiamini1, alt: "jiamini 1" },
          { img: jiamini2, alt: "jiamini 2" },
          { img: jiamini3, alt: "jiamini 3" },
          { img: jiamini4, alt: "jiamini 4" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "eclat",
    title: "Éclat Solidaire",
    description: [
      "Éclat Solidaire est un site qui recense les associations ayant peu de visibilité et les événements disponibles.",
      "On peut s'inscrire bénévolement à une association et faire des dons si on le souhaite."
    ],
    githubLink: null,
    githubLinkBackend: null,
    image: eclat,
    tags: ["react", "nodejs", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "react", percentage: 50 },
          { name: "nodejs", percentage: 30 },
          { name: "js", percentage: 20 }
        ],
        slides: [
          { img: eclat1, alt: "eclat 1" },
          { img: eclat2, alt: "eclat 2" },
          { img: eclat3, alt: "eclat 3" },
          { img: eclat4, alt: "eclat 4" },
          { img: eclat5, alt: "eclat 5" },
          { img: eclat6, alt: "eclat 6" },
          { img: eclat7, alt: "eclat 7" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ]
  },
  {
    key: "portfolio2020",
    title: "Portfolio",
    description: [
      "Mon ancien portfolio présentant mes projets et compétences sur un design de windows 10."
    ],
    githubLink: "https://github.com/ouss17/portfolio-2020",
    githubLinkBackend: null,
    image: portfolio,
    tags: ["html", "css", "js"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "html", percentage: 40 },
          { name: "css", percentage: 35 },
          { name: "js", percentage: 25 }
        ],
        slides: [
          { img: portfolio1, alt: "portfolio 1" },
          { img: portfolio2, alt: "portfolio 2" },
          { img: portfolio3, alt: "portfolio 3" },
          { img: portfolio4, alt: "portfolio 4" },
          { img: portfolio5, alt: "portfolio 5" }
        ],
        githubLink: null,
        githubLinkBackend: null
      }
    ],
    link: "https://portfolio-2020-vl56.vercel.app"
  },
  {
    key: "vaultMyPassword",
    title: "Vault My Password",
    description: [
      "Vault My Password est une application mobile de gestion de mots de passe sécurisée, permettant aux utilisateurs de stocker, organiser et accéder facilement à leurs mots de passe et informations sensibles."
    ],
    githubLink: "https://github.com/ouss17/vault-my-password",
    githubLinkBackend: null,
    image: vaultMyPassword2,
    tags: ["expo", "react native", "redux"],
    versions: [
      {
        version: "v1",
        technos: [
          { name: "expo", percentage: 40 },
          { name: "redux", percentage: 30 },
          { name: "react native", percentage: 15 },
        ],
        slides: [
          { img: vaultMyPassword1, alt: "vaultMyPassword 1" },
          { img: vaultMyPassword2, alt: "vaultMyPassword 2" },
          { img: vaultMyPassword3, alt: "vaultMyPassword 3" },
          { img: vaultMyPassword4, alt: "vaultMyPassword 4" },
          { img: vaultMyPassword5, alt: "vaultMyPassword 5" },
          { img: vaultMyPassword6, alt: "vaultMyPassword 6" }
        ],
        githubLink: "https://github.com/ouss17/vault-my-password",
        githubLinkBackend: null
      }
    ]
  }
];

export default [
  {
    title: "Visa Restrictions",
    mainImg: require("../../assets/visa-restrictions/1.jpg"),
    imgs: [require("../../assets/visa-restrictions/1.jpg")],
    desc: `Le <a href="http://visarequired.info" target="_blank">visarequired.info</a> est un site Web qui vous permet de sélectionner une nationalité et d'obtenir les conditions de visa pour différents pays. Le site est composé de trois parties.\n\nLa première partie est un scraper Web NodeJS qui traverse Wikipedia à la recherche d'informations sur les visas pour toutes les nationalités. Il utilise une implémentation de jQuery pour sélectionner des données dans des tableaux situés sur des pages Wikipedia. Ce Web Scraper nettoie et stocke automatiquement les données sur un serveur MySQL situé à gearhost.com. Le code pour le Web Scraper peut être trouvé <a target="_blank" href="https://github.com/mierz00/visa-webscraper">ici</a>.\n\nLa deuxième partie est une API ExpressJS hébergée sur Heroku. Cette API permet d'accéder aux informations de la base de données MySQL. L'API est disponible à l'adresse https://visa-info-api.herokuapp.com et le code source se trouve <a target="_blank" href="https://github.com/mierz00/visa-info-api">ici</a>.\n\nLa dernière partie est un site Web frontal React qui utilise des pages GitHub pour l'hébergement. Le site Web se connecte à l'API ExpressJS. Vous pouvez trouver le code source <a target="_blank" href="https://github.com/mierz00/visa-info-site">ici</a>.`,
    toolIcons: [
      { name: "NodeJS", icon: "devicon-nodejs-plain" },
      { name: "ExpressJS", icon: "devicon-express-original" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Heroku", icon: "devicon-heroku-original" },
      { name: "React", icon: "devicon-react-original" },
      { name: "jQuery", icon: "devicon-jquery-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "SCSS", icon: "devicon-sass-plain" },
      { name: "Git", icon: "devicon-git-plain" }
    ]
  },
  {
    title: "uConnected Application",
    mainImg: require("../../assets/uconnected/1.png"),
    imgs: [
      require("../../assets/uconnected/2.png"),
      require("../../assets/uconnected/7.png"),
      require("../../assets/uconnected/6.png"),
      require("../../assets/uconnected/3.png"),
      require("../../assets/uconnected/4.png"),
      require("../../assets/uconnected/5.png")
    ],
    desc: `Application IOS et Android construite à l’aide de React Native pour uConnected. Elle permet aux clients d'uConnected de se connecter et de passer des appels via leur service VoIP. Elle comprend diverses fonctionnalités telles que l'authentification de l'utilisateur, l'accès à la liste de contacts de l'appareil avec une liste de défilement alphabétique, un clavier et l'intégration du tableau de bord de uConnected.\n\nL'application intègre diverses bibliothèques telles que Redux, React Native Navigation et PJSIP Native React. Elle contient une série d’animations qui garantissent une expérience utilisateur fluide et en ligne avec une expérience utilisateur native.\n\nVous pouvez visiter le site Web de uConnected <a target="_blank" href="https://www.uconnected.com.au">ici</a>.`,
    toolIcons: [
      { name: "React Native", icon: "devicon-react-original" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "IOS", icon: "devicon-apple-plain" },
      { name: "Android", icon: "devicon-android-plain" },
      { name: "Git", icon: "devicon-git-plain" }
    ]
  },
  {
    title: "Showcase backend",
    mainImg: require("../../assets/showcase-backend/1.jpg"),
    imgs: [require("../../assets/showcase-backend/1.jpg")],
    toolIcons: [
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "NodeJS", icon: "devicon-nodejs-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "ExpressJS", icon: "devicon-express-original" }
    ],
    desc:
      "Application back-end Node JS et MongoDB qui permet aux utilisateurs de créer, lire, mettre à jour et supprimer un portfolio. Cette API a été écrite en conjonction avec une application IOS mais peut facilement être utilisée avec une interface Web.\n\nLe stockage sécurisé des comptes utilisateur avec des mots de passe hachés à l'aide de la bibliothèque Bcrypt. Stockage des images et des descriptions pour les éléments de portefeuille uniquement accessibles aux utilisateurs authentifiés."
  },

  {
    title: "Tic Tac Toe",
    mainImg: require("../../assets/tictactoe/1.jpg"),
    imgs: [require("../../assets/tictactoe/1.jpg")],
    toolIcons: [
      { name: "React", icon: "devicon-react-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" }
    ],
    desc: `Tic Tac Toe est une application de React qui permet à l'utilisateur de jouer au célèbre jeu Tic Tac Toe contre l'ordinateur. Le jeu est actuellement imbattable car il utilise l'algorithme Mini Max pour parcourir toutes les options possibles du jeu. J'ai écrit cette application pour mieux comprendre React et comment animer les modifications apportées aux composants.\n\nVous pouvez trouver le code source et jouer au jeu ici sur <a target="_blank" href="https://codepen.io/mierz/full/BZBymp/">CodePen</a>.`
  },

  {
    title: "Simon Game",
    mainImg: require("../../assets/simon-game/1.jpg"),
    imgs: [require("../../assets/simon-game/1.jpg")],
    desc: `Ceci est ma version du jeu électronique populaire de 1978, Simon, qui teste la mémoire du joueur.\n\nVous pouvez jouer au jeu et afficher le code source ici à <a target="_blank" href="https: //codepen.io/mierz/pen/RgbaVZ">CodePen</a>.`,
    toolIcons: [
      { name: "jQuery", icon: "devicon-jquery-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" }
    ]
  },
  {
    title: "Calculator",
    mainImg: require("../../assets/calculator/1.jpg"),
    imgs: [require("../../assets/calculator/1.jpg")],
    toolIcons: [
      { name: "jQuery", icon: "devicon-jquery-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain" }
    ],
    desc: `Construite à l'aide de jQuery, cette application Web a été écrite pour mieux comprendre jQuery et le positionnement des éléments HTML tout en combinant des opérations simples dans une interface utilisateur.\n\nVous pouvez afficher l'application Web <a target="_blank" href="https://codepen.io/mierz/pen/zwEPXp">ici</a>.`
  }
];

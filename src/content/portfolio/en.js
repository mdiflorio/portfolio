export default [
  {
    title: "Visa Restrictions",
    mainImg: require("../../assets/visa-restrictions/1.jpg"),
    imgs: [require("../../assets/visa-restrictions/1.jpg")],
    desc: `<a href="http://visarequired.info" target="_blank">visarequired.info</a> is a website which allows you to select a nationality and get visa requirements for a variety of different countries. The site is made up of three parts.\n\nThe first part is a NodeJS web scraper which traverses Wikipedia in search for all nationalities visa information. It uses an implementation of jQuery to select data within tables located on Wikipedia pages. This web scraper automatically cleans and stores the data on a MySQL server located at gearhost.com. Code for the web scraper can be found <a target="_blank" href="https://github.com/mierz00/visa-webscraper">here</a>.\n\nThe second part is an ExpressJS API hosted on Heroku. This API allows access to the MySQL database information. The API is available at https://visa-info-api.herokuapp.com and the source code can be located <a target="_blank" href="https://github.com/mierz00/visa-info-api">here</a>.\n\nThe last part is a React front-end website which uses GitHub pages for hosting. The website connects with the ExpressJS API. You can find the source code <a target="_blank" href="https://github.com/mierz00/visa-info-site">here</a>.`,
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
    title: "uConnected App",
    mainImg: require("../../assets/uconnected/1.png"),
    imgs: [
      require("../../assets/uconnected/2.png"),
      require("../../assets/uconnected/7.png"),
      require("../../assets/uconnected/6.png"),
      require("../../assets/uconnected/3.png"),
      require("../../assets/uconnected/4.png"),
      require("../../assets/uconnected/5.png")
    ],
    desc: `An IOS and Android application built using React native for uConnected. The app allows the clients of uConnected to connect and make calls through their VoIP service and includes various features such as user authentication, access to the device's contacts list complete with an alphabetical scroll list, a keypad, and an integration of uConnected's dashboard.\n\nThe app incorporates a variety of libraries such as Redux, React Native Navigation and React Native PJSIP. It contains a range of animations to ensure the user experience is smooth and in line with a native user experience.\n\nYou can visit uConnected's website <a href="https://www.uconnected.com.au">here</a>.`,
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
      "A Node JS and MongoDB backend application which allows users to create, read, update and delete a portfolio. This API was written in conjunction with an IOS application but could easily be used with a web interface.\n\nFeaturing secure storage of user accounts with hashed passwords using the Bcrypt library. Image and description storage for portfolio items which are only accessible to authenticated users."
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
    desc:
      'Tic Tac Toe is a React application which allows the user to play the famous game Tic Tac Toe against the computer. The game is currently unbeatable as it uses the Mini Max algorithm to traverse through all the possible plays in the game. I wrote this app to get a better understanding of React and how to animate changes to components.\n\nYou can find the source code and play the game here on <a href="https://codepen.io/mierz/full/BZBymp/">CodePen</a>.'
  },

  {
    title: "Simon Game",
    mainImg: require("../../assets/simon-game/1.jpg"),
    imgs: [require("../../assets/simon-game/1.jpg")],
    desc:
      "This is my take on the popular 1978's electronic game Simon which tests the player's memory. The game shows a series of lights and sounds in which the player has to memorise and repeat in sequence. Built using jQuery, the game consists of a normal mode which allows the player to make a mistake and then it will repeat the last sequence. The strict mode resets the count to 0 if any mistake is made.\n\nYou can play the game and view the source code here at <a href=\"https://codepen.io/mierz/pen/RgbaVZ\">CodePen</a>.",
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
    desc:
      'Built using jQuery, this calculator web app was written to get a better understanding of jQuery and positioning HTML elements whilst combining simple operations in a user interface.\n\n You can view the web app <a href="https://codepen.io/mierz/pen/zwEPXp">here</a>.'
  }
  // {
  //   title: " Toe",
  //   mainImg: require("../../assets/tictactoe/1.jpg"),
  //   imgs: [require("../../assets/tictactoe/1.jpg")],
  //   toolIcons: [
  //     { name: "React Native", icon: "devicon-react-original" },
  //     { name: "HTML", icon: "devicon-html5-plain" },
  //     { name: "CSS", icon: "devicon-css3-plain" },
  //     { name: "Apple", icon: "devicon-apple-plain" },
  //     { name: "Android", icon: "devicon-android-plain" },
  //     { name: "Git", icon: "devicon-git-plain" }
  //   ],
  //   desc:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac metus ut mi vulputate sollicitudin. Pellentesque auctor interdum pulvinar. Suspendisse vitae venenatis libero. Mauris hendrerit lacus ac ligula luctus porta. Integer accumsan ullamcorper sollicitudin. Praesent auctor urna sit amet auctor sollicitudin. Suspendisse eu nulla eleifend, euismod velit sed, cursus nibh. Duis blandit quis est eget blandit. Etiam a est ac diam placerat efficitur et ac elit. Sed ac vulputate leo. Maecenas augue elit, dignissim id enim ac, cursus luctus risus. Vestibulum luctus molestie libero, ut tristique augue porttitor eget. Donec a nisl commodo urna accumsan fermentum ac non orci. Vivamus est eros, pretium et hendrerit ac, ornare ac magna. Vivamus vitae mauris eu enim tincidunt dictum. Cras non elit vitae justo aliquam sagittis."
  // }
];

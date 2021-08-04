import burgerMain from './img/burger.jpg';
import burgerFull from './img/burger-full.jpg';
import playerMain from './img/player.jpg';
import playerFull from './img/player-full.jpg';
import iGniteMain from './img/iGnite.jpg';
import iGniteFull from './img/iGnite-full.jpg'
import crwnMain from './img/crwn-clothing.jpg'
import crwnFull from './img/crwn-full.jpg'

export const projectState = () => {
  return [
    {
      title: 'iGnite',
      mainImg: iGniteMain,
      url: '/projects/iGnite',
      secondaryImg: iGniteFull,
      projectInfo: [
        {
          title: 'iGnite',
          description:
            'This application is a kind of library that contains detailed information about games. A search has been implemented with the help of which you can find the game you are interested in, you can also see the most popular games and games that will be released soon. You can also see the rating for each game by version rawg.io the platform on which the game is supported and additional information.',
          demo: 'https://dzmitrydavid.github.io/GsLibrary/',
          features: [
            '✔️ Use of React hooks',
            '✔️ Use of React Router', 
            '✔️ Page transitions and animations (handled with Framer Motion)',
            '✔️ Responsive Web-App',
            '✔️ Use Api and async fetching data with Axios',
            '✔️ Use of Styled components',
            ],
        },
      ],
    },
    {
      title: 'Crwn Clothing',
      mainImg: crwnMain,
      url: '/projects/crwn-clothing',
      secondaryImg: crwnFull,
      projectInfo: [
        {
          title: 'Crwn Clothing',
          description:
          "crown clothing ...in progress",
          features: [],
          demo: 'https://github.com/',
        },
      ],
    },
    {
      title: 'Chill Player',
      mainImg: playerMain,
      url: '/projects/chill-player',
      secondaryImg: playerFull,
      projectInfo: [
        {
          title: 'Chill Player',
          description:
          `This is a small audio player that contains several relaxing tracks. In this small application, I studied working with state, props and access to DOM elements in react.`,
          features: [
          '✔️ Use of React hooks',
          '✔️ Use of FontAwesome', 
          '✔️ Use of Sass',
          '✔️ Responsive Web-App',
          '✔️ Interesting input stylization'],
          demo: 'https://dzmitrydavid.github.io/ChillPlayer/',
        },
      ],
    },
    {
      title: 'Burger Builder',
      mainImg: burgerMain,
      url: '/projects/burger-builder',
      secondaryImg: burgerFull,
      projectInfo: [
        {
          title: 'Burger Builder',
          description:
            '...in progress',
          demo: 'https://dzmitrydavid.github.io/burger-app/',
          features:[]
        },
      ],
    },
  ];
};

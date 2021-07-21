import burger from './img/burger.jpg';
import chillPlayer from './img/player.jpg';
import movieFinder from './img/movieFinder.jpg';

export const projectState = () => {
  return [
    {
      title: 'Burger Builder',
      mainImg: burger,

      url: '/projects/burger-builder',
      projectInfo: [
        {
          title: 'Burger Builder',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Chill Player',
      mainImg: chillPlayer,
      url: '/projects/chill-player',

      projectInfo: [
        {
          title: 'Chill Player',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Movie Finder',
      mainImg: movieFinder,
      url: '/projects/movie-finder',

      projectInfo: [
        {
          title: 'movieFinder',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};

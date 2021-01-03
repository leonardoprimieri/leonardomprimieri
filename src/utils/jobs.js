import {
  FaCss3,
  FaHandRock,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact,
  FaSun,
  FaVideo,
  FaWordpress,
} from 'react-icons/fa';

import lelow from '../assets/svg/lelow.png';
import ebooks from '../assets/svg/trafego.png';
import leogg from '../assets/svg/leogg.png';
import netflix from '../assets/svg/netflix.png';
import reactflix from '../assets/svg/reactflix.png';
import rank from '../assets/svg/rank.png';
import otohits from '../assets/svg/otohits.png';
import net from '../assets/svg/net.png';
import breakingblog from '../assets/svg/breakingblog.png';

export const jobs = [
  {
    id: 0,
    name: 'Lelo Weather',
    description:
      'Esse aplicativo tem o objetivo de consultar a previsão do tempo em qualquer cidade.',
    image: lelow,
    techs: [
      { name: 'ReactJS', image: <FaReact size={30} /> },
      { name: 'AccuWeather API', image: <FaSun size={30} /> },
    ],
    sold: false,
    project: true,
  },
  {
    id: 8,
    name: 'Breaking Blog',
    description:
      'Blog desenvolvido em WordPress, com busca, categorias, menus e sidebar.',
    image: breakingblog,
    techs: [{ name: 'WordPress', image: <FaWordpress size={30} /> }],
    sold: false,
    project: true,
  },
  {
    id: 2,
    name: 'leo.gg',
    description:
      'Esse APP foi criado para consultar a API da RiotGames. Ele traz o perfil do invocador, bem como o level, ícone, seu main e tier.',
    image: leogg,
    techs: [
      { name: 'ReactJS', image: <FaReact size={30} /> },
      { name: 'RiotGames API', image: <FaHandRock size={30} /> },
    ],
    sold: false,
    project: true,
  },
  {
    id: 3,
    name: 'netflix ui clone',
    description: 'Esse foi um clone feito do UI da Netflix',
    image: netflix,
    techs: [
      { name: 'ReactJS', image: <FaReact size={30} /> },
      { name: 'TMDB API', image: <FaVideo size={30} /> },
    ],
    sold: false,
    project: true,
  },
  {
    id: 4,
    name: 'reactflix',
    description:
      'Esse projeto roda uma API feita por mim em Node, que processa os vídeos. Basicamente você adiciona uma vídedo e ele te leva pra ele no Youtube, o intuito seria "salvar" seus vídeos preferidos, separados por categoria.',
    image: reactflix,
    techs: [
      { name: 'ReactJS', image: <FaReact size={30} /> },
      { name: 'NodeJS', image: <FaNode size={30} /> },
    ],
    sold: false,
    project: true,
  },
  {
    id: 5,
    name: 'rankboost',
    description: 'Landing page para uma campanha de afiliado',
    image: rank,
    techs: [
      { name: 'HTML5', image: <FaHtml5 size={30} /> },
      { name: 'CSS3', image: <FaCss3 size={30} /> },
      { name: 'PHP', image: <FaPhp size={30} /> },
    ],
    sold: true,
    project: true,
  },
  {
    id: 6,
    name: 'otohits',
    description: 'Landing page para uma campanha de afiliado',
    image: otohits,
    techs: [
      { name: 'HTML5', image: <FaHtml5 size={30} /> },
      { name: 'CSS3', image: <FaCss3 size={30} /> },
      { name: 'PHP', image: <FaPhp size={30} /> },
    ],
    sold: true,
    project: true,
  },
  {
    id: 7,
    name: 'netvisiteurs',
    description: 'Landing page para uma campanha de afiliado',
    image: net,
    techs: [
      { name: 'HTML5', image: <FaHtml5 size={30} /> },
      { name: 'CSS3', image: <FaCss3 size={30} /> },
      { name: 'PHP', image: <FaPhp size={30} /> },
    ],
    sold: true,
    project: true,
  },
  {
    id: 1,
    name: 'Página de Ebooks',
    description:
      'Esse site foi feito para um cliente. Você cadastra seu nome e e-mail e recebe dois ebooks grátis',
    image: ebooks,
    techs: [
      { name: 'HTML5', image: <FaHtml5 size={30} /> },
      { name: 'CSS3', image: <FaCss3 size={30} /> },
      { name: 'PHP', image: <FaPhp size={30} /> },
    ],
    sold: true,
    project: true,
  },
];

import { JobsModel } from "@/models/jobs-model";
import { FaHandRock, FaNode, FaReact, FaSun, FaVideo, FaWordpress } from "react-icons/fa";

export const jobs: JobsModel[] = [
  {
    id: 0,
    name: "Lelo Weather",
    description:
      "Esse aplicativo tem o objetivo de consultar a previsão do tempo em qualquer cidade.",
    image: "https://leonardomprimieri.vercel.app/static/media/lelow.c78b8a38.png",
    techs: [
      { name: "ReactJS", icon: <FaReact size={30} /> },
      { name: "AccuWeather API", icon: <FaSun size={30} /> },
    ],
    project: true,
  },
  {
    id: 8,
    name: "Breaking Blog",
    description: "Blog desenvolvido em WordPress, com busca, categorias, menus e sidebar.",
    image: "https://leonardomprimieri.vercel.app/static/media/breakingblog.2b3db5b8.png",
    techs: [{ name: "WordPress", icon: <FaWordpress size={30} /> }],
    project: true,
  },
  {
    id: 2,
    name: "leo.gg",
    description:
      "Esse APP foi criado para consultar a API da RiotGames. Ele traz o perfil do invocador, bem como o level, ícone, seu main e tier.",
    image: "https://leonardomprimieri.vercel.app/static/media/leogg.d8d8daff.png",
    techs: [
      { name: "ReactJS", icon: <FaReact size={30} /> },
      { name: "RiotGames API", icon: <FaHandRock size={30} /> },
    ],
    project: true,
  },
  {
    id: 3,
    name: "netflix ui clone",
    description: "Esse foi um clone feito do UI da Netflix",
    image: "https://leonardomprimieri.vercel.app/static/media/netflix.43e96c57.png",
    techs: [
      { name: "ReactJS", icon: <FaReact size={30} /> },
      { name: "TMDB API", icon: <FaVideo size={30} /> },
    ],
    project: true,
  },
  {
    id: 4,
    name: "reactflix",
    description:
      'Esse projeto roda uma API feita por mim em Node, que processa os vídeos. Basicamente você adiciona uma vídedo e ele te leva pra ele no Youtube, o intuito seria "salvar" seus vídeos preferidos, separados por categoria.',
    image: "https://leonardomprimieri.vercel.app/static/media/reactflix.05ddbd03.png",
    techs: [
      { name: "ReactJS", icon: <FaReact size={30} /> },
      { name: "NodeJS", icon: <FaNode size={30} /> },
    ],
    project: true,
  },

  {
    id: 10,
    name: "League of Quiz",
    description:
      "Projeto feito durante a imersão da Alura. Vencedor da bolsa de estudos para a JAM Stack.",
    image: "https://leonardomprimieri.vercel.app/static/media/leagueofquiz.2b73f243.png",
    techs: [{ name: "NextJS", icon: <FaReact size={30} /> }],
    project: true,
  },
];

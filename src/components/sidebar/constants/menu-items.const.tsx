import { FaGithub, FaMedal, FaProjectDiagram, FaUser } from "react-icons/fa";

export const MENU_ITEMS = [
  {
    href: "about",
    icon: <FaUser size={24} color='#fff' className='menu-span-item' />,
    text: "Sobre",
  },
  {
    href: "projects",
    icon: <FaProjectDiagram size={24} color='#fff' className='menu-span-item' />,
    text: "Projetos",
  },
  {
    href: "github",
    icon: <FaGithub size={24} color='#fff' className='menu-span-item' />,
    text: "Github",
  },
  {
    href: "certificates",
    icon: <FaMedal size={24} color='#fff' className='menu-span-item' />,
    text: "Certificados",
  },
];

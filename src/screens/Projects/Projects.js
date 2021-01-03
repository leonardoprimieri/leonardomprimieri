import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Swiper from '../../components/Swiper/Swiper';

import './style.css';

const Projects = () => {
  return (
    <div className="projects-main__content" id="projects">
      <SectionTitle>Projetos</SectionTitle>
      <Swiper />
    </div>
  );
};

export default Projects;

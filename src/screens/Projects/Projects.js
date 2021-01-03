import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Swiper from '../../components/Swiper/Swiper';

import './style.css';
import { jobs } from '../../utils/jobs';

const Projects = () => {
  return (
    <div className="projects-main__content" id="projects">
      <SectionTitle>Projetos</SectionTitle>
      <Swiper data={jobs} />
    </div>
  );
};

export default Projects;

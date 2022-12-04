import "./style.css";
import { jobs } from "../../utils/jobs";
import SectionTitle from "../../components/section-title/section-title";
import Swiper from "../../components/swiper/swiper";

const Projects = () => {
  return (
    <div className='projects-main__content' id='projects'>
      <SectionTitle>Projetos</SectionTitle>
      <Swiper data={jobs} />
    </div>
  );
};

export default Projects;

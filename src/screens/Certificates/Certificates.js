import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Swiper from '../../components/Swiper/Swiper';
import './style.css';
import { certificates } from '../../utils/certificates';

import medal from '../../assets/svg/medalha.png';

const Certificates = () => {
  return (
    <div
      className="main-certificates show-container"
      style={{
        backgroundImage: `url("${medal}")`,
      }}
    >
      <SectionTitle>Certificados</SectionTitle>
      <Swiper data={certificates} />
    </div>
  );
};

export default Certificates;

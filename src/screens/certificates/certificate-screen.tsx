import SectionTitle from "../../components/section-title/section-title";
import Swiper from "../../components/swiper/swiper";
import "./style.css";
import { certificates } from "../../utils/certificates";

const Certificates = () => {
  return (
    <div
      className='main-certificates show-container'
      style={
        {
          // backgroundImage: `url("${medal}")`,
        }
      }
    >
      <SectionTitle>Certificados</SectionTitle>
      <Swiper data={certificates} />
    </div>
  );
};

export default Certificates;

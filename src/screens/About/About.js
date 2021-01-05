import { ReactComponent as Me } from '../../assets/svg/me.svg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import wave from '../../assets/svg/wave-about.png';

import './style.css';

const About = () => {
  return (
    <div
      className="full-screen full-screen__about"
      style={{
        backgroundImage: `url("${wave}")`,
      }}
    >
      <section className="about-main show-container" id="about">
        <SectionTitle>Sobre</SectionTitle>
        <div className="about-main__content">
          <div className="about-content__left">
            <p>
              Meu nome é Leonardo Merlo Primieri, estudante de Front End há 2
              anos. Moro em São José do Ouro e estou fazendo ciências da
              computação na IMED, em Passo Fundo. Seja bem vindo ao meu
              portfólio!
            </p>
          </div>
          <div className="about-content__right">
            <Me className="me-svg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

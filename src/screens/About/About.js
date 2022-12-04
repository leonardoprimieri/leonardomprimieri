import SectionTitle from "../../components/SectionTitle/SectionTitle";

import wave from "../../assets/svg/wave-about.png";

import "./style.css";

const About = () => {
  return (
    <div
      className='full-screen full-screen__about'
      style={{
        backgroundImage: `url("${wave}")`,
      }}
    >
      <section className='about-main show-container' id='about'>
        <SectionTitle>Sobre</SectionTitle>
        <div className='about-main__content'>
          <div className='about-content__left'>
            <p>
              Meu nome é Leonardo Merlo Primieri, estudante de Front End há 2 anos. Moro em Passo
              Fundo - RS estou fazendo ciências da computação na Atitus e sou Dev Front End na{" "}
              <a
                style={{ color: "var(--primary-color)" }}
                href='https://www.sof.to/'
                target='_blank'
                rel='noreferrer'
              >
                Sof.to
              </a>
              . Seja bem vindo ao meu portfólio!
            </p>
          </div>
          <div className='about-content__right'>
            <div className='father-circle'>
              <div className='son-circle'>
                <img src='https://avatars.githubusercontent.com/u/59492647?v=4' alt='Leonardo' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

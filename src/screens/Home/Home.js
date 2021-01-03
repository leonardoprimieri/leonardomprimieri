import Header from '../../components/Header/Header';
import { ReactComponent as Hero } from '../../assets/svg/guy-coding.svg';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';
import wave from '../../assets/svg/wave.png';
import './style.css';

const Home = () => {
  return (
    <div
      className="full-screen"
      style={{
        backgroundImage: `url("${wave}")`,
      }}
    >
      <Header />

      <section className="home-main__content" id="home">
        <div className="main-content_wrapper">
          <div className="main-content__left">
            <h1>Leonardo M. Primieri</h1>
            <p>Desenvolvedor Front End.</p>
            <div className="content-left__buttons">
              <button className="button button-secondary">
                <a href="#github">repositórios</a>
              </button>
              <button className="button button-primary">
                <a href="#projects">projetos</a>
              </button>
            </div>
          </div>
          <div className="main-content__right">
            <Hero className="hero-home" fill="black" />
          </div>
        </div>
        <div className="home-main__footer">
          <a href="#about">
            <ArrowDown />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Hero } from '../../assets/svg/guy-coding.svg';
import wave from '../../assets/svg/wave.png';
import ReactTypingEffect from 'react-typing-effect';

import TransitionScreenContext from '../../contexts/TransitionScreenContext';

import './style.css';

const Home = () => {
  const { setLinkClicked } = useContext(TransitionScreenContext);

  return (
    <div
      className="full-screen show-container"
      style={{
        backgroundImage: `url("${wave}")`,
      }}
    >
      <section className="home-main__content" id="home">
        <div className="main-content_wrapper">
          <div className="main-content__left">
            <h1>
              <ReactTypingEffect
                text={['Leonardo M. Primieri']}
                typingDelay="2000"
                staticText
              />
            </h1>
            <p>Desenvolvedor Front End.</p>
            <div className="content-left__buttons">
              <Link to="github">
                <button
                  className="button button-secondary"
                  onClick={() => setLinkClicked(true)}
                >
                  repositórios
                </button>
              </Link>
              <Link to="projects">
                <button
                  className="button button-primary"
                  onClick={() => setLinkClicked(true)}
                >
                  projetos
                </button>
              </Link>
            </div>
          </div>
          <div className="main-content__right">
            <Hero className="hero-home" fill="black" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

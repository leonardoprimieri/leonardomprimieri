import { useContext } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

import { FaEye, FaGithub } from "react-icons/fa";

import TransitionScreenContext from "../../contexts/transitions-screen-context";

import "./style.css";

const Home = () => {
  const { setLinkClicked } = useContext<any>(TransitionScreenContext);

  const typeName = "Leonardo M. Primieri";
  return (
    <div
      className='full-screen show-container'
      style={{
        backgroundImage: `url("images/svg/wave.png")`,
      }}
    >
      <section className='home-main__content' id='home'>
        <div className='main-content_wrapper'>
          <div className='main-content__left'>
            <h1>
              <ReactTypingEffect text={typeName} typingDelay={400} />
            </h1>
            <p>Desenvolvedor Front End.</p>
            <div className='content-left__buttons'>
              <Link to='github'>
                <button className='button button-secondary' onClick={() => setLinkClicked(true)}>
                  repositórios
                  <FaGithub />
                </button>
              </Link>
              <Link to='projects'>
                <button className='button button-primary' onClick={() => setLinkClicked(true)}>
                  projetos
                  <FaEye />
                </button>
              </Link>
            </div>
          </div>
          <div className='main-content__right'>
            <img className='hero-home' src='/images/svg/guy-coding.svg' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

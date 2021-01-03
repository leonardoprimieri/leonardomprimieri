import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import ReactTooltip from 'react-tooltip';

import {
  FaBlog,
  FaExclamation,
  FaGithub,
  FaMedal,
  FaProjectDiagram,
  FaRedoAlt,
  FaUser,
} from 'react-icons/fa';

import './style.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import TransitionScreenContext from '../../contexts/TransitionScreenContext';

const SideBar = () => {
  const [mainColor, setMainColor] = useState('#ff725e');

  const { setLinkClicked } = useContext(TransitionScreenContext);

  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty('--primary-color', mainColor);
  }, [mainColor]);
  return (
    <>
      <aside>
        <ReactTooltip />

        <div className="aside-content">
          <div className="aside-logo">
            <Link to="/" onClick={() => setLinkClicked((state) => !state)}>
              <Logo />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <FaBlog
                  data-tip="blog"
                  className="svg-blog"
                  size={24}
                  color="#fff"
                />
                <FaExclamation
                  className="svg-warning"
                  data-tip="em construção"
                  color="#1c1c1c"
                />
              </li>
              <li>
                <Link
                  to="about"
                  data-tip="sobre"
                  onClick={() => setLinkClicked((state) => !state)}
                >
                  <FaUser size={24} color="#fff" />
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  data-tip="projetos"
                  onClick={() => setLinkClicked((state) => !state)}
                >
                  <FaProjectDiagram size={24} color="#fff" />
                </Link>
              </li>
              <li>
                <Link
                  to="github"
                  data-tip="repositórios"
                  onClick={() => setLinkClicked((state) => !state)}
                >
                  <FaGithub size={24} color="#fff" />
                </Link>
              </li>
              <li>
                <Link
                  to="certificates"
                  data-tip="certificados"
                  onClick={() => setLinkClicked((state) => !state)}
                >
                  <FaMedal size={24} color="#fff" />
                </Link>
              </li>
              <li>
                <FaRedoAlt
                  onClick={() => setMainColor('#FF725E')}
                  size={24}
                  color="#fff"
                  data-tip="voltar a cor padrão"
                />
              </li>
              <li>
                <input
                  type="color"
                  value={mainColor}
                  data-tip="alterar cor pradrão"
                  onChange={({ target }) => setMainColor(target.value)}
                />
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

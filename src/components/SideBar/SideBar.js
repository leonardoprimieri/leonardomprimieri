import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import {
  FaBlog,
  FaExclamation,
  FaGithub,
  FaMedal,
  FaProjectDiagram,
  FaUser,
} from 'react-icons/fa';

import './style.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import TransitionScreenContext from '../../contexts/TransitionScreenContext';

const SideBar = () => {
  // const [mainColor, setMainColor] = useState('#ff725e');

  const { setLinkClicked } = useContext(TransitionScreenContext);

  // useEffect(() => {
  //   let root = document.documentElement;
  //   root.style.setProperty('--primary-color', mainColor);
  // }, [mainColor]);
  return (
    <>
      <aside>
        <div className="aside-content">
          <div className="aside-logo">
            <NavLink
              to="/"
              onClick={() => setLinkClicked((state) => !state)}
              activeClassName="active-menu"
            >
              <Logo id="logo" />
              <span id="span-name">eonardo</span>
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <div>
                  <FaBlog
                    className="svg-blog menu-span-item"
                    size={24}
                    color="#fff"
                  />
                  <FaExclamation
                    className="svg-warning menu-span-item"
                    color="#1c1c1c"
                  />
                </div>
                <span className="blog-span">Blog</span>
              </li>
              <li>
                <NavLink
                  to="about"
                  onClick={() => setLinkClicked((state) => !state)}
                  activeClassName="active-menu"
                >
                  <FaUser size={24} color="#fff" className="menu-span-item" />
                  <span>Sobre</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  onClick={() => setLinkClicked((state) => !state)}
                  activeClassName="active-menu"
                >
                  <FaProjectDiagram
                    size={24}
                    color="#fff"
                    className="menu-span-item"
                  />
                  <span className="small-item ">Projetos</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="github"
                  onClick={() => setLinkClicked((state) => !state)}
                  activeClassName="active-menu"
                >
                  <FaGithub size={24} color="#fff" className="menu-span-item" />
                  <span>Github</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="certificates"
                  onClick={() => setLinkClicked((state) => !state)}
                  activeClassName="active-menu"
                >
                  <FaMedal size={24} color="#fff" className="menu-span-item" />
                  <span className="small-item ">Certificados</span>
                </NavLink>
              </li>
              {/* <li>
                <FaRedoAlt
                  onClick={() => setMainColor('#FF725E')}
                  size={24}
                  color="#fff"
                />
              </li> */}
              {/* <li>
                <input
                  type="color"
                  value={mainColor}
                  onChange={({ target }) => setMainColor(target.value)}
                />
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

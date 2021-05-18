import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import ReactTooltip from 'react-tooltip';
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
import MenuMobileContext from '../../contexts/MenuMobileContext';

const SideBar = ({ mobile }) => {
  // const [mainColor, setMainColor] = useState('#ff725e');

  const { setLinkClicked } = useContext(TransitionScreenContext);
  const { setMobile } = useContext(MenuMobileContext);

  // useEffect(() => {
  //   let root = document.documentElement;
  //   root.style.setProperty('--primary-color', mainColor);
  // }, [mainColor]);

  function handleLinkClick(state) {
    setLinkClicked((state) => !state);
    setMobile(false);
  }

  return (
    <>
      <aside style={mobile ? { height: '100%' } : { height: '10%' }}>
        <ReactTooltip />
        <div className="aside-content">
          <div className="aside-logo">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              activeClassName="active-menu"
            >
              <Logo id="logo" />
              <span id="span-name">eonardo</span>
            </NavLink>
          </div>
          <nav>
            <ul
              style={
                mobile
                  ? { display: 'flex', flexDirection: 'column' }
                  : { height: '10%' }
              }
            >
              <li>
                <div>
                  <FaBlog
                    className="svg-blog menu-span-item"
                    size={24}
                    color="#fff"
                  />
                  <FaExclamation
                    className="svg-warning menu-span-item"
                    color="#fff"
                    data-tip="em construção"
                  />
                </div>

                <span className="blog-span">Blog</span>
              </li>
              <li>
                <NavLink
                  to="about"
                  onClick={handleLinkClick}
                  activeClassName="active-menu"
                >
                  <FaUser size={24} color="#fff" className="menu-span-item" />
                  <span>Sobre</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  onClick={handleLinkClick}
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
                  onClick={handleLinkClick}
                  activeClassName="active-menu"
                >
                  <FaGithub size={24} color="#fff" className="menu-span-item" />
                  <span>Github</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="certificates"
                  onClick={handleLinkClick}
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

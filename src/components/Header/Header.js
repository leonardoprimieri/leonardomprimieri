import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { ReactComponent as Warning } from '../../assets/svg/warning.svg';

import './style.css';

const Header = () => {
  const [blackHeader, setBlackHeader] = useState();
  const navRef = useRef();
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navRef.current.style.top = '-10rem';
      } else {
        navRef.current.style.top = '0';
      }

      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <nav
      ref={navRef}
      style={{ background: blackHeader ? '#000' : 'transparent' }}
    >
      <div className="nav-content">
        <div className="nav-logo">
          <a href="#home">
            <Logo id="logo" />
            <span id="span-name">eonardo</span>
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <span>blog</span>
              <Warning />
            </li>
            <li>
              <a href="#about">sobre</a>
            </li>
            <li>
              <a href="#projects">projetos</a>
            </li>
            <li>
              <a href="#github">repositórios</a>
            </li>
            <li>tecnologias</li>
            <li>certificados</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

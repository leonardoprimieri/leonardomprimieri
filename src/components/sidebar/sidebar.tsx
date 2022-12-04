import { NavLink } from "react-router-dom";
import { useContext } from "react";

import TransitionScreenContext from "../../contexts/transitions-screen-context";
import MenuMobileContext from "../../contexts/menu-mobile-context";

import "./style.css";
import { MENU_ITEMS } from "./constants/menu-items.const";

type Props = {
  mobile: boolean;
};

const SideBar = ({ mobile }: Props) => {
  const { setLinkClicked } = useContext(TransitionScreenContext);
  const { setMobile } = useContext(MenuMobileContext);

  function handleLinkClick() {
    setLinkClicked((state: boolean) => !state);
    setMobile(false);
  }

  return (
    <aside style={mobile ? { height: "100%" } : { height: "10%" }}>
      <div className='aside-content'>
        <div className='aside-logo'>
          <NavLink to='/' onClick={handleLinkClick} activeClassName='active-menu'>
            <img src='../../assets/svg/logo.svg' id='Logo' />
            <span id='span-name'>eonardo</span>
          </NavLink>
        </div>
        <nav>
          <ul style={mobile ? { display: "flex", flexDirection: "column" } : { height: "10%" }}>
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  onClick={handleLinkClick}
                  activeClassName='active-menu'
                  data-tip={item.text}
                  data-for='menu'
                >
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;

import { ReactComponent as Menu } from '../../assets/svg/menu-mobile.svg';

import './style.css';

const MenuButton = ({ setMobile }) => {
  return (
    <div className="menu-area" onClick={() => setMobile((state) => !state)}>
      <Menu />
    </div>
  );
};

export default MenuButton;

import "./style.css";

type Props = {
  setMobile: (state: boolean) => void;
};

const MenuButton = ({ setMobile }: Props) => {
  return (
    <div className='menu-area' onClick={() => setMobile((state) => !state)}>
      <img src='/images/svg/menu-mobile.svg' />
    </div>
  );
};

export default MenuButton;

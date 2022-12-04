import "./style.css";

type Props = {
  setMobile: any;
};

const MenuButton = ({ setMobile }: Props) => {
  return (
    <div className='menu-area' onClick={() => setMobile((state: any) => !state)}>
      <img src='/images/svg/menu-mobile.svg' />
    </div>
  );
};

export default MenuButton;

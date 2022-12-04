import "./style.css";

type Props = {
  setMobile: (state: any) => boolean;
};

const MenuButton = ({ setMobile }: Props) => {
  return <div className='menu-area' onClick={() => setMobile((state: boolean) => !state)} />;
};

export default MenuButton;

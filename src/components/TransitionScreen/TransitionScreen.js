import './style.css';

import gif from '../../assets/svg/gif.gif';

const TransitionScreen = ({ transition }) => {
  return (
    <div
      className="transition-screen"
      style={
        transition === false
          ? { animation: `hide1 1s forwards` }
          : { animation: 'hide3 1s forwards' }
      }
    >
      <img src={gif} alt="michael doing a beauty thing" />
    </div>
  );
};

export default TransitionScreen;

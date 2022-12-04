import "./style.css";

type Props = {
  transition: boolean;
};

const TransitionScreen = ({ transition }: Props) => {
  return (
    <div
      className='transition-screen'
      style={
        !transition
          ? { animation: `hide1 1s ease forwards` }
          : { animation: "hide3 1s ease forwards" }
      }
    >
      <img src='/images/svg/gif.gif' alt='michael doing a beauty thing' />
    </div>
  );
};

export default TransitionScreen;
